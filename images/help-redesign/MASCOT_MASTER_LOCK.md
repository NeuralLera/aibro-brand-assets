# /help scene set — MASCOT MASTER LOCK (single canonical formulation)

> Purpose: keep the brand mascot **visually identical across all 8 `/help` scene
> anchors** so they read as ONE character when they sit as 8 cards in one grid.
> Master look = frame **`obschenie-i-assistent.png`** (round chibi, readable face,
> scales well to a small card). Klod decision, N84 (2026-07-22).
>
> **How consistency was achieved:** word-lock below, injected into every scene
> prompt. In N84 (partneram + kontent-i-anonsy regen) the word-lock ALONE produced
> a mascot that matches the master closely — no image-reference needed. The proxy
> `/llm/image` DOES accept a `reference_images` field (mascot-only crop, additive)
> for a stronger anchor if a future round drifts; it was not required here.
> When regenerating the remaining 6 frames for full-set unification, paste this
> exact block into each prompt (and optionally attach a mascot-only crop of the
> master frame as a reference).

## MASCOT (paste verbatim into every scene prompt)

```
THE MASCOT (brand character 'Айбро' — keep visually IDENTICAL in every frame):
a small, cute, chibi-proportioned friendly robot assistant with a large
head-to-body ratio. Compact rounded EGG-SHAPED glossy WHITE body and short
little legs. Its face is a soft cream/off-white rounded-square screen panel
showing two closed, happy, upward-curved crescent eyes and a small warm smiling
mouth, gently glowing warm. One circular emerald-green port/'ear' on each side of
the rounded head. Emerald-green accents ONLY on: the shoulder yoke/collar, the
upper arms, the side head-ports, and a soft emerald glow at the base of the body
— the rest of the shell is clean glossy white. Short stubby white-and-green arms
ending in small simple rounded mitten hands (no detailed fingers). Warm,
approachable, premium toy-robot look. Exactly the same proportions, same round
head shape, same face layout and same emerald placement as a single consistent
character.
```

## Set style block (paste alongside)

```
Warm hyperrealistic editorial photograph. Cozy Russian small-business interior:
warm wooden surfaces, whitewashed exposed brick wall, lush green potted plants,
soft natural window light, a subtle emerald-green ambient glow in the environment.
Cinematic, premium, inviting mood. All people have Slavic / Eastern-European
appearance. Wide landscape 16:9 composition. ABSOLUTELY NO text, letters, numbers,
words, logos, watermarks, UI or signage anywhere — any screens show only a soft
warm glow, never an interface.
```

## Anatomy guard (paste alongside — mandatory)

```
Anatomically correct human hands, exactly five fingers per visible hand, exactly
two arms per person, hands rendered cleanly and naturally. NO extra hand, NO extra
or third arm, NO duplicated or fused limbs, NO merged or extra fingers, NO deformed
hands.
NEGATIVE: extra hand, third arm, duplicated limb, fused fingers, extra fingers,
deformed hands, handshake with hands merging, text, letters, numbers, signage, UI.
```

## Generation facts

- Format: **1408×768 (16:9)**. The image model IGNORES the API `size` field and
  returns its native landscape (~1376×768); script centre-crops + resizes to exact
  1408×768 to match the set.
- Pipeline: `GeminiViaProxyAdapter.generate_image()` (`/llm/image`) run **inside
  the prod container `aibrosmm_app`** (only place the Hetzner mTLS proxy is
  reachable). Model = proxy env SSoT (`gemini-3.1-flash-image`); client model name
  is ignored by the proxy.
- Quota: image conveyor ~21 frames/day (N63 canon). 429 = quota → wait + resume.

## N84 regen log (2026-07-22)

| slug | reason | attempts | anatomy self-check |
|---|---|---|---|
| `partneram` | REJECT — duplicate hand from one sleeve (Rumira). Regenerated WITHOUT handshake: two owners at a table, mascot between them, hands visible + separate. | 1 | PASS — man 5 fingers (1 hand), woman 5 fingers (1 hand), apart, no handshake, no extra limb |
| `kontent-i-anonsy` | Cold frame — owner looking down, no smile (Rumira). Regenerated: owner looking up, warm genuine smile, face lit, engaged with mascot. | 1 | PASS — woman hand 5 fingers natural single; mascot mitten stylized clean; notebook + mood-board blank (no text) |

Other 6 frames NOT touched. File keys unchanged (same raw-URL).
