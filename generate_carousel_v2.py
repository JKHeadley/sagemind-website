#!/usr/bin/env python3
"""
Generate LinkedIn Carousel slides for Sagemind AI - V2 Enhanced
Advanced tech-focused design with gradients, patterns, and AI-inspired visuals
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
import math
import random

# Sagemind Brand Colors
DARK_NAVY = (2, 34, 46)
BRIGHT_CYAN = (8, 241, 199)
TEAL = (0, 130, 118)
DARK_TEAL = (1, 79, 79)
WHITE = (255, 255, 255)
LIGHT_GRAY = (245, 245, 245)

# Slide dimensions
WIDTH = 1080
HEIGHT = 1080

# Output directory
OUTPUT_DIR = "carousel_slides_v2"


def create_gradient_background(width, height, color1, color2, vertical=True):
    """Create a gradient background"""
    base = Image.new('RGB', (width, height), color1)
    gradient = Image.new('RGB', (width, height), color1)
    draw = ImageDraw.Draw(gradient)

    if vertical:
        for i in range(height):
            r = int(color1[0] + (color2[0] - color1[0]) * i / height)
            g = int(color1[1] + (color2[1] - color1[1]) * i / height)
            b = int(color1[2] + (color2[2] - color1[2]) * i / height)
            draw.line([(0, i), (width, i)], fill=(r, g, b))
    else:
        for i in range(width):
            r = int(color1[0] + (color2[0] - color1[0]) * i / width)
            g = int(color1[1] + (color2[1] - color1[1]) * i / width)
            b = int(color1[2] + (color2[2] - color1[2]) * i / width)
            draw.line([(i, 0), (i, height)], fill=(r, g, b))

    return gradient


def add_circuit_pattern(img, color, opacity=30):
    """Add circuit board pattern overlay"""
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Draw circuit-like lines and nodes
    random.seed(42)  # Consistent pattern
    for _ in range(15):
        x1, y1 = random.randint(0, WIDTH), random.randint(0, HEIGHT)
        x2, y2 = x1 + random.randint(-200, 200), y1 + random.randint(-200, 200)
        draw.line([(x1, y1), (x2, y2)], fill=(*color, opacity), width=2)
        draw.ellipse([(x1-5, y1-5), (x1+5, y1+5)], fill=(*color, opacity))
        draw.ellipse([(x2-5, y2-5), (x2+5, y2+5)], fill=(*color, opacity))

    # Convert to RGB and composite
    img_rgba = img.convert('RGBA')
    img_rgba = Image.alpha_composite(img_rgba, overlay)
    return img_rgba.convert('RGB')


def add_geometric_shapes(img, color, opacity=40):
    """Add geometric shapes overlay"""
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Hexagons and lines
    random.seed(123)
    for _ in range(8):
        x, y = random.randint(0, WIDTH), random.randint(0, HEIGHT)
        size = random.randint(40, 80)
        # Draw hexagon outline
        points = []
        for i in range(6):
            angle = math.pi / 3 * i
            px = x + size * math.cos(angle)
            py = y + size * math.sin(angle)
            points.append((px, py))
        draw.polygon(points, outline=(*color, opacity), width=2)

    img_rgba = img.convert('RGBA')
    img_rgba = Image.alpha_composite(img_rgba, overlay)
    return img_rgba.convert('RGB')


def add_neural_network_pattern(img, color, opacity=50):
    """Add AI/neural network inspired pattern"""
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Create nodes
    random.seed(789)
    nodes = [(random.randint(100, WIDTH-100), random.randint(100, HEIGHT-100)) for _ in range(12)]

    # Connect nearby nodes
    for i, node1 in enumerate(nodes):
        draw.ellipse([(node1[0]-6, node1[1]-6), (node1[0]+6, node1[1]+6)], fill=(*color, opacity))
        for node2 in nodes[i+1:]:
            distance = math.sqrt((node1[0]-node2[0])**2 + (node1[1]-node2[1])**2)
            if distance < 250:
                draw.line([node1, node2], fill=(*color, int(opacity*0.5)), width=1)

    img_rgba = img.convert('RGBA')
    img_rgba = Image.alpha_composite(img_rgba, overlay)
    return img_rgba.convert('RGB')


def add_glow_text(draw, text, position, font, color, glow_color):
    """Add glowing text effect"""
    x, y = position
    # Draw glow layers
    for offset in range(3, 0, -1):
        alpha = int(60 / offset)
        draw.text((x, y), text, fill=(*glow_color, alpha), font=font)
    # Draw main text
    draw.text((x, y), text, fill=color, font=font)


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


def create_slide_1_v2():
    """Enhanced Cover Slide with tech elements"""
    # Gradient background
    img = create_gradient_background(WIDTH, HEIGHT, DARK_NAVY, DARK_TEAL)

    # Add tech patterns
    img = add_circuit_pattern(img, BRIGHT_CYAN, opacity=40)
    img = add_neural_network_pattern(img, BRIGHT_CYAN, opacity=60)

    # Convert to RGBA for text with glow
    img_rgba = img.convert('RGBA')
    draw = ImageDraw.Draw(img_rgba)

    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 85)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 42)
        small_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        small_font = ImageFont.load_default()

    # Main title with spacing
    title_lines = ["5 Signs You've", "Outgrown", "Template Solutions"]
    y_pos = 250
    for line in title_lines:
        bbox = draw.textbbox((0, 0), line, font=title_font)
        text_width = bbox[2] - bbox[0]
        x_pos = (WIDTH - text_width) // 2

        # Add glow effect
        for offset in range(4, 0, -1):
            draw.text((x_pos, y_pos), line, fill=(*BRIGHT_CYAN, int(30/offset)), font=title_font)
        draw.text((x_pos, y_pos), line, fill=WHITE, font=title_font)
        y_pos += 95

    # Subtitle with glow
    subtitle = "Is your software holding your business back?"
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2

    for offset in range(3, 0, -1):
        draw.text((x_pos, 660), subtitle, fill=(*BRIGHT_CYAN, int(50/offset)), font=subtitle_font)
    draw.text((x_pos, 660), subtitle, fill=BRIGHT_CYAN, font=subtitle_font)

    # Add decorative line
    draw.line([(WIDTH//2 - 100, 620), (WIDTH//2 + 100, 620)], fill=BRIGHT_CYAN, width=3)

    # Bottom text
    swipe = "Swipe to discover →"
    bbox = draw.textbbox((0, 0), swipe, font=small_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2
    draw.text((x_pos, 880), swipe, fill=BRIGHT_CYAN, font=small_font)

    # Logo
    logo_text = "SAGEMIND AI"
    bbox = draw.textbbox((0, 0), logo_text, font=small_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2
    draw.text((x_pos, 950), logo_text, fill=BRIGHT_CYAN, font=small_font)

    return img_rgba.convert('RGB')


def create_sign_slide_v2(number, headline, body, style='dark'):
    """Enhanced sign slide with tech elements"""
    if style == 'dark':
        img = create_gradient_background(WIDTH, HEIGHT, DARK_NAVY, DARK_TEAL)
        img = add_geometric_shapes(img, BRIGHT_CYAN, opacity=50)
        text_color = WHITE
        accent_color = BRIGHT_CYAN
        number_color = BRIGHT_CYAN
    elif style == 'light':
        img = create_gradient_background(WIDTH, HEIGHT, LIGHT_GRAY, WHITE)
        img = add_circuit_pattern(img, TEAL, opacity=30)
        text_color = DARK_NAVY
        accent_color = DARK_NAVY
        number_color = TEAL
    else:  # cyan
        base_cyan = (int(BRIGHT_CYAN[0]*0.3), int(BRIGHT_CYAN[1]*0.3), int(BRIGHT_CYAN[2]*0.3))
        img = create_gradient_background(WIDTH, HEIGHT, base_cyan, DARK_TEAL)
        img = add_neural_network_pattern(img, BRIGHT_CYAN, opacity=70)
        text_color = WHITE
        accent_color = BRIGHT_CYAN
        number_color = BRIGHT_CYAN

    img_rgba = img.convert('RGBA')
    draw = ImageDraw.Draw(img_rgba)

    try:
        number_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 180)
        headline_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 58)
        body_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
        logo_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
    except:
        number_font = ImageFont.load_default()
        headline_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        logo_font = ImageFont.load_default()

    # Number with glow
    for offset in range(5, 0, -1):
        draw.text((70, 70), str(number), fill=(*number_color, int(40/offset)), font=number_font)
    draw.text((70, 70), str(number), fill=number_color, font=number_font)

    # Decorative element next to number
    draw.rectangle([(50, 280), (60, 380)], fill=accent_color)

    # Headline
    headline_lines = wrap_text(headline, headline_font, WIDTH - 160, draw)
    y_pos = 350
    for line in headline_lines:
        draw.text((80, y_pos), line, fill=accent_color, font=headline_font)
        y_pos += 72

    # Body text
    body_lines = wrap_text(body, body_font, WIDTH - 160, draw)
    y_pos += 30
    for line in body_lines:
        draw.text((80, y_pos), line, fill=text_color, font=body_font)
        y_pos += 48

    # Logo
    draw.text((80, 970), "SAGEMIND AI", fill=accent_color, font=logo_font)

    return img_rgba.convert('RGB')


def create_solution_slide_v2():
    """Enhanced Solution Slide"""
    img = create_gradient_background(WIDTH, HEIGHT, DARK_NAVY, DARK_TEAL)
    img = add_circuit_pattern(img, BRIGHT_CYAN, opacity=50)
    img = add_neural_network_pattern(img, BRIGHT_CYAN, opacity=40)

    img_rgba = img.convert('RGBA')
    draw = ImageDraw.Draw(img_rgba)

    try:
        headline_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 68)
        body_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
        logo_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 30)
    except:
        headline_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        logo_font = ImageFont.load_default()

    # Headline with glow
    headline_lines = ["Custom Doesn't", "Mean Complicated"]
    y_pos = 120
    for line in headline_lines:
        for offset in range(3, 0, -1):
            draw.text((80, y_pos), line, fill=(*BRIGHT_CYAN, int(40/offset)), font=headline_font)
        draw.text((80, y_pos), line, fill=WHITE, font=headline_font)
        y_pos += 85

    # Decorative line
    draw.rectangle([(80, 300), (300, 305)], fill=BRIGHT_CYAN)

    # Bullet points with icons
    bullets = [
        "✓  Built for YOUR exact workflow",
        "✓  No paying for features you won't use",
        "✓  Seamless integrations with existing tools",
        "✓  Scales with your business, not against it"
    ]

    y_pos = 380
    for bullet in bullets:
        # Draw bullet glow
        draw.text((80, y_pos), bullet, fill=BRIGHT_CYAN, font=body_font)
        y_pos += 90

    # Bottom tagline
    tagline = "Built exactly how you need it."
    draw.text((80, 850), tagline, fill=BRIGHT_CYAN, font=logo_font)

    # Logo
    draw.text((80, 970), "SAGEMIND AI", fill=BRIGHT_CYAN, font=logo_font)

    return img_rgba.convert('RGB')


def create_cta_slide_v2():
    """Enhanced CTA Slide"""
    # Vibrant gradient
    base_color = (int(BRIGHT_CYAN[0]*0.9), int(BRIGHT_CYAN[1]*0.9), int(BRIGHT_CYAN[2]*0.9))
    img = create_gradient_background(WIDTH, HEIGHT, base_color, BRIGHT_CYAN, vertical=False)
    img = add_geometric_shapes(img, DARK_NAVY, opacity=60)

    img_rgba = img.convert('RGBA')
    draw = ImageDraw.Draw(img_rgba)

    try:
        headline_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 64)
        body_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 34)
        url_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 52)
        logo_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
    except:
        headline_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        url_font = ImageFont.load_default()
        logo_font = ImageFont.load_default()

    # Headline
    headline_lines = ["Ready to Build", "What You", "Actually Need?"]
    y_pos = 140
    for line in headline_lines:
        draw.text((80, y_pos), line, fill=DARK_NAVY, font=headline_font)
        y_pos += 78

    # Decorative element
    draw.rectangle([(80, 420), (200, 425)], fill=DARK_NAVY)

    # Body
    body_lines = [
        "Custom websites + Google Workspace solutions",
        "designed for small businesses, startups,",
        "and growing teams."
    ]
    y_pos = 460
    for line in body_lines:
        draw.text((80, y_pos), line, fill=DARK_NAVY, font=body_font)
        y_pos += 48

    # URL box with shadow
    draw.rectangle([(70, 690), (WIDTH - 70, 810)], fill=DARK_NAVY)
    draw.rectangle([(80, 700), (WIDTH - 80, 800)], fill=DARK_NAVY)

    url_text = "sagemindai.io"
    bbox = draw.textbbox((0, 0), url_text, font=url_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2

    # URL with glow
    for offset in range(3, 0, -1):
        draw.text((x_pos, 725), url_text, fill=(*BRIGHT_CYAN, int(50/offset)), font=url_font)
    draw.text((x_pos, 725), url_text, fill=BRIGHT_CYAN, font=url_font)

    # Bottom tagline
    tagline = "SAGEMIND AI  |  Bay Area Software Consulting"
    bbox = draw.textbbox((0, 0), tagline, font=logo_font)
    text_width = bbox[2] - bbox[0]
    x_pos = (WIDTH - text_width) // 2
    draw.text((x_pos, 960), tagline, fill=DARK_NAVY, font=logo_font)

    return img_rgba.convert('RGB')


def main():
    """Generate all enhanced slides"""
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print("🚀 Generating enhanced carousel slides with advanced tech elements...")
    print()

    # Slide 1 - Cover
    print("✨ Creating slide 1: Cover (with neural network pattern)")
    slide1 = create_slide_1_v2()
    slide1.save(f"{OUTPUT_DIR}/slide_01_cover.png", quality=95)

    # Slide 2 - Sign #1
    print("✨ Creating slide 2: Sign #1 (dark with geometric shapes)")
    slide2 = create_sign_slide_v2(
        1,
        "You're Building Workarounds for Workarounds",
        "Your team spends more time finding ways around your software's limitations than actually using it.",
        style='dark'
    )
    slide2.save(f"{OUTPUT_DIR}/slide_02_sign1.png", quality=95)

    # Slide 3 - Sign #2
    print("✨ Creating slide 3: Sign #2 (light with circuit pattern)")
    slide3 = create_sign_slide_v2(
        2,
        "You're Paying for 80% You Don't Use",
        "Template platforms charge for every feature—even the ones that don't fit your workflow.",
        style='light'
    )
    slide3.save(f"{OUTPUT_DIR}/slide_03_sign2.png", quality=95)

    # Slide 4 - Sign #3
    print("✨ Creating slide 4: Sign #3 (cyan gradient with AI pattern)")
    slide4 = create_sign_slide_v2(
        3,
        "Custom Requests Get a 'No' or '$$$'",
        "Every unique need hits a wall: 'Not possible' or expensive custom development on top of your subscription.",
        style='cyan'
    )
    slide4.save(f"{OUTPUT_DIR}/slide_04_sign3.png", quality=95)

    # Slide 5 - Sign #4
    print("✨ Creating slide 5: Sign #4 (light with tech elements)")
    slide5 = create_sign_slide_v2(
        4,
        "Integration Hell",
        "Your Google Workspace, CRM, and website don't talk to each other—so you're copying data manually.",
        style='light'
    )
    slide5.save(f"{OUTPUT_DIR}/slide_05_sign4.png", quality=95)

    # Slide 6 - Sign #5
    print("✨ Creating slide 6: Sign #5 (dark gradient)")
    slide6 = create_sign_slide_v2(
        5,
        "Scaling Means Starting Over",
        "Your template solution can't grow with you. Hitting a growth wall means rebuilding from scratch.",
        style='dark'
    )
    slide6.save(f"{OUTPUT_DIR}/slide_06_sign5.png", quality=95)

    # Slide 7 - Solution
    print("✨ Creating slide 7: Solution (with full tech overlay)")
    slide7 = create_solution_slide_v2()
    slide7.save(f"{OUTPUT_DIR}/slide_07_solution.png", quality=95)

    # Slide 8 - CTA
    print("✨ Creating slide 8: Call to Action (bright with geometric shapes)")
    slide8 = create_cta_slide_v2()
    slide8.save(f"{OUTPUT_DIR}/slide_08_cta.png", quality=95)

    print()
    print("✅ All enhanced slides generated successfully!")
    print(f"📁 Saved to: {os.path.abspath(OUTPUT_DIR)}")
    print()
    print("🎨 Features added:")
    print("  • Gradient backgrounds")
    print("  • Circuit board patterns")
    print("  • Neural network visualizations")
    print("  • Geometric shape overlays")
    print("  • Glowing text effects")
    print("  • AI-inspired visual elements")
    print()
    print("Next steps:")
    print("1. Review the slides in the carousel_slides_v2 folder")
    print("2. Upload to LinkedIn as a carousel post")
    print("3. Add the caption from LINKEDIN_CAROUSEL_POST.md")


if __name__ == "__main__":
    main()
