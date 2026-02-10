#!/usr/bin/env python3
"""
Generate LinkedIn Carousel slides for Sagemind AI
Creates 8 slides for "5 Signs You've Outgrown Template Solutions"
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Sagemind Brand Colors
DARK_NAVY = "#02222e"
BRIGHT_CYAN = "#08f1c7"
TEAL = "#008276"
DARK_TEAL = "#014f4f"
WHITE = "#ffffff"
LIGHT_GRAY = "#f5f5f5"

# Slide dimensions
WIDTH = 1080
HEIGHT = 1080

# Output directory
OUTPUT_DIR = "carousel_slides"


def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def wrap_text(text, font, max_width, draw):
    """Wrap text to fit within max_width"""
    words = text.split()
    lines = []
    current_line = []

    for word in words:
        test_line = ' '.join(current_line + [word])
        bbox = draw.textbbox((0, 0), test_line, font=font)
        width = bbox[2] - bbox[0]

        if width <= max_width:
            current_line.append(word)
        else:
            if current_line:
                lines.append(' '.join(current_line))
            current_line = [word]

    if current_line:
        lines.append(' '.join(current_line))

    return lines


def create_slide_1():
    """Cover Slide"""
    img = Image.new('RGB', (WIDTH, HEIGHT), hex_to_rgb(DARK_NAVY))
    draw = ImageDraw.Draw(img)

    # Try to use system fonts, fall back to default
    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 80)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 45)
        small_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 35)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        small_font = ImageFont.load_default()

    # Main title
    title_lines = ["5 Signs You've", "Outgrown", "Template Solutions"]
    y_pos = 280
    for line in title_lines:
        bbox = draw.textbbox((0, 0), line, font=title_font)
        text_width = bbox[2] - bbox[0]
        x_pos = (WIDTH - text_width) // 2
        draw.text((x_pos, y_pos), line, fill=hex_to_rgb(WHITE), font=title_font)
        y_pos += 90

    # Subtitle
    subtitle = "Is your software holding your business back?"
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2
    draw.text((x_pos, 650), subtitle, fill=hex_to_rgb(BRIGHT_CYAN), font=subtitle_font)

    # Bottom text
    swipe = "Swipe to find out →"
    bbox = draw.textbbox((0, 0), swipe, font=small_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2
    draw.text((x_pos, 920), swipe, fill=hex_to_rgb(BRIGHT_CYAN), font=small_font)

    # Logo text
    logo_text = "SAGEMIND AI"
    bbox = draw.textbbox((0, 0), logo_text, font=small_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2
    draw.text((x_pos, 980), logo_text, fill=hex_to_rgb(BRIGHT_CYAN), font=small_font)

    return img


def create_sign_slide(number, headline, body, bg_color, accent_color, number_color):
    """Create a sign slide (slides 2-6)"""
    img = Image.new('RGB', (WIDTH, HEIGHT), hex_to_rgb(bg_color))
    draw = ImageDraw.Draw(img)

    try:
        number_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 200)
        headline_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 60)
        body_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 38)
        logo_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
    except:
        number_font = ImageFont.load_default()
        headline_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        logo_font = ImageFont.load_default()

    # Number
    draw.text((80, 80), str(number), fill=hex_to_rgb(number_color), font=number_font)

    # Headline - wrap text
    headline_lines = wrap_text(headline, headline_font, WIDTH - 160, draw)
    y_pos = 350
    for line in headline_lines:
        draw.text((80, y_pos), line, fill=hex_to_rgb(accent_color), font=headline_font)
        y_pos += 75

    # Body text - wrap text
    body_lines = wrap_text(body, body_font, WIDTH - 160, draw)
    y_pos += 40
    for line in body_lines:
        draw.text((80, y_pos), line, fill=hex_to_rgb(accent_color), font=body_font)
        y_pos += 50

    # Logo
    draw.text((80, 980), "SAGEMIND AI", fill=hex_to_rgb(accent_color), font=logo_font)

    return img


def create_solution_slide():
    """Slide 7 - The Solution"""
    img = Image.new('RGB', (WIDTH, HEIGHT), hex_to_rgb(DARK_NAVY))
    draw = ImageDraw.Draw(img)

    try:
        headline_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 65)
        body_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 38)
        logo_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 30)
    except:
        headline_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        logo_font = ImageFont.load_default()

    # Headline
    headline_lines = ["Custom Doesn't", "Mean Complicated"]
    y_pos = 120
    for line in headline_lines:
        draw.text((80, y_pos), line, fill=hex_to_rgb(WHITE), font=headline_font)
        y_pos += 80

    # Bullet points
    bullets = [
        "✓ Built for YOUR exact workflow",
        "✓ No paying for features you won't use",
        "✓ Seamless integrations with existing tools",
        "✓ Scales with your business, not against it"
    ]

    y_pos = 380
    for bullet in bullets:
        draw.text((80, y_pos), bullet, fill=hex_to_rgb(BRIGHT_CYAN), font=body_font)
        y_pos += 90

    # Bottom text
    tagline = "Built exactly how you need it."
    draw.text((80, 860), tagline, fill=hex_to_rgb(BRIGHT_CYAN), font=logo_font)

    # Logo
    draw.text((80, 980), "SAGEMIND AI", fill=hex_to_rgb(BRIGHT_CYAN), font=logo_font)

    return img


def create_cta_slide():
    """Slide 8 - Call to Action"""
    img = Image.new('RGB', (WIDTH, HEIGHT), hex_to_rgb(BRIGHT_CYAN))
    draw = ImageDraw.Draw(img)

    try:
        headline_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 62)
        body_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
        url_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 50)
        logo_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 30)
    except:
        headline_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        url_font = ImageFont.load_default()
        logo_font = ImageFont.load_default()

    # Headline
    headline_lines = ["Ready to Build", "What You", "Actually Need?"]
    y_pos = 140
    for line in headline_lines:
        draw.text((80, y_pos), line, fill=hex_to_rgb(DARK_NAVY), font=headline_font)
        y_pos += 75

    # Body
    body_lines = [
        "Custom websites + Google Workspace",
        "solutions designed for small businesses,",
        "startups, and growing teams."
    ]
    y_pos += 40
    for line in body_lines:
        draw.text((80, y_pos), line, fill=hex_to_rgb(DARK_NAVY), font=body_font)
        y_pos += 50

    # URL box
    draw.rectangle([(80, 700), (WIDTH - 80, 800)], fill=hex_to_rgb(DARK_NAVY))
    url_text = "sagemindai.io"
    bbox = draw.textbbox((0, 0), url_text, font=url_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2
    draw.text((x_pos, 720), url_text, fill=hex_to_rgb(BRIGHT_CYAN), font=url_font)

    # Bottom tagline
    tagline = "SAGEMIND AI | Bay Area Software Consulting"
    bbox = draw.textbbox((0, 0), tagline, font=logo_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2
    draw.text((x_pos, 980), tagline, fill=hex_to_rgb(DARK_NAVY), font=logo_font)

    return img


def main():
    """Generate all slides"""
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print("Generating carousel slides...")

    # Slide 1 - Cover
    print("Creating slide 1: Cover")
    slide1 = create_slide_1()
    slide1.save(f"{OUTPUT_DIR}/slide_01_cover.png", quality=95)

    # Slide 2 - Sign #1
    print("Creating slide 2: Sign #1")
    slide2 = create_sign_slide(
        1,
        "You're Building Workarounds for Workarounds",
        "Your team spends more time finding ways around your software's limitations than actually using it.",
        WHITE,
        DARK_NAVY,
        BRIGHT_CYAN
    )
    slide2.save(f"{OUTPUT_DIR}/slide_02_sign1.png", quality=95)

    # Slide 3 - Sign #2
    print("Creating slide 3: Sign #2")
    slide3 = create_sign_slide(
        2,
        "You're Paying for 80% You Don't Use",
        "Template platforms charge for every feature—even the ones that don't fit your workflow.",
        LIGHT_GRAY,
        DARK_NAVY,
        DARK_NAVY
    )
    slide3.save(f"{OUTPUT_DIR}/slide_03_sign2.png", quality=95)

    # Slide 4 - Sign #3
    print("Creating slide 4: Sign #3")
    slide4 = create_sign_slide(
        3,
        "Custom Requests Get a 'No' or '$$$'",
        "Every unique need hits a wall: 'Not possible' or expensive custom development on top of your subscription.",
        DARK_NAVY,
        WHITE,
        WHITE
    )
    slide4.save(f"{OUTPUT_DIR}/slide_04_sign3.png", quality=95)

    # Slide 5 - Sign #4
    print("Creating slide 5: Sign #4")
    slide5 = create_sign_slide(
        4,
        "Integration Hell",
        "Your Google Workspace, CRM, and website don't talk to each other—so you're copying data manually.",
        WHITE,
        DARK_NAVY,
        BRIGHT_CYAN
    )
    slide5.save(f"{OUTPUT_DIR}/slide_05_sign4.png", quality=95)

    # Slide 6 - Sign #5
    print("Creating slide 6: Sign #5")
    slide6 = create_sign_slide(
        5,
        "Scaling Means Starting Over",
        "Your template solution can't grow with you. Hitting a growth wall means rebuilding from scratch.",
        DARK_NAVY,
        WHITE,
        BRIGHT_CYAN
    )
    slide6.save(f"{OUTPUT_DIR}/slide_06_sign5.png", quality=95)

    # Slide 7 - Solution
    print("Creating slide 7: Solution")
    slide7 = create_solution_slide()
    slide7.save(f"{OUTPUT_DIR}/slide_07_solution.png", quality=95)

    # Slide 8 - CTA
    print("Creating slide 8: Call to Action")
    slide8 = create_cta_slide()
    slide8.save(f"{OUTPUT_DIR}/slide_08_cta.png", quality=95)

    print(f"\n✓ All slides generated successfully!")
    print(f"✓ Saved to: {os.path.abspath(OUTPUT_DIR)}")
    print("\nNext steps:")
    print("1. Review the slides in the carousel_slides folder")
    print("2. Upload to LinkedIn as a carousel post")
    print("3. Add the caption from LINKEDIN_CAROUSEL_POST.md")


if __name__ == "__main__":
    main()
