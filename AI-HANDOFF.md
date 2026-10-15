# Doctor Perfume — AI / Builder Handoff

This repository contains the current production gateway website for **Doctor Perfume**.

## Purpose
This is the main QR-code landing/gateway site at:
https://doctorperfume.vip

It is not the full ecommerce store. The gateway is meant to:
- present the Doctor Perfume brand
- link to social media
- show store branches
- open branch WhatsApp chats
- open branch Google Maps locations
- later link to the separate perfume shopping website

## Files
- `index.html` — complete website (HTML, CSS, JavaScript in one file)
- `favicon.png` — Doctor Perfume browser/favicon logo
- `assets/doctor-perfume-bg.png` — main Doctor Perfume hero artwork
- `README.md` — basic project notes

## Visual direction
- luxury black + gold
- elegant fragrance-boutique feel
- dark cinematic background
- restrained gold glows
- thin gold framing/details
- avoid generic AI-style clutter, excessive particles, neon effects, or loud gradients

### Main colors
- background: `#050505`
- gold: `#d8b45e`
- light gold: `#eed28d`

## Hero / opening
- branded loading screen using the favicon/logo
- thin spinning gold loader ring
- smooth cinematic hero reveal after loading
- hero artwork centered as a foreground layer
- subtle ambient gold lighting
- social buttons appear after the hero
- reload returns the visitor to the hero/top

## Social links
- Instagram: https://www.instagram.com/doctor1119621
- Facebook: https://www.facebook.com/share/1FP3N6whjQ/
- TikTok: placeholder / not connected yet
- WhatsApp is intentionally NOT in the main social row because branch WhatsApp actions are inside the locations section

## Locations

### مفرق

#### دمشق الميدان
WhatsApp:
+963 981 384 721

Google Maps:
https://maps.app.goo.gl/mzZA4ov8oxANA8ax5

#### صحنايا
WhatsApp:
+963 939 837 098

Google Maps:
https://maps.app.goo.gl/Si2G1dB99UjD3jWGA

### جملة
Currently shown as:
**سنفتح قريباً**
**ترقبونا**

No WhatsApp or map action yet.

## Interaction details
- smooth scroll to locations
- scroll reveal animations replay when the user leaves and re-enters the section
- location cards use WhatsApp as the primary action
- separate map-pin action opens Google Maps
- responsive mobile and desktop layouts
- reduced-motion accessibility support
- custom SVG icons are used instead of emoji glyphs

## Future work
- connect official TikTok URL
- add a main **Shop Perfumes** button
- point that button to the future ecommerce/perfume catalog site
- replace the wholesale coming-soon card when the branch opens

## Important
When importing/rebuilding this site in Framer, Wix, or another builder:
1. Preserve the existing responsive layout and black/gold identity.
2. Keep text, social links, WhatsApp numbers, and Maps links exactly unless explicitly updated.
3. Keep the branch structure: two retail branches under **مفرق**, one wholesale section under **جملة**.
4. Do not bake interactive buttons into images.
5. Keep the hero artwork as a separate image layer so it can scale independently on mobile/desktop.
6. Keep the QR destination as the main gateway domain: https://doctorperfume.vip
