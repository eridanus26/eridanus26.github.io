# 🧁 How to Update Your Bakery Blog

Welcome to your new blog! Updating your content is as simple as editing a single file.

## 📝 Updating Posts

### Required Core Fields (Put these on Every Single Post)

id: "1"                         # String wrapped in quotes
title: "Your Post Title"        # String
date: "2026-05-22"              # YYYY-MM-DD
category: "general"             # Must be: general, photography, travel, food, or academic
subcategory: ""                 # String (Use empty string if none)
tags:                           # Array of strings
  - "personal"
  - "update"
excerpt: "Short brief sentence" # String summary
updatedAt: "2026-05-22T16:08:18-04:00"
coverImage: "https://..."       # Image URL string

### Category-Specific Fields

**If category: photography (PhotographyPost)**

theme: "Urban"                  # String
collection: "Japan 2024"        # String
showOnMap: true                 # Boolean (true or false)
images:                         # Array of image asset URLs
  - "https://picsum.photos/..."
  - "https://picsum.photos/..."
location:                       # Location object
  name: "Shinjuku, Tokyo"       # String
  lat: 35.6895                  # Float Number
  lng: 139.6917                 # Float Number

**If category: travel (TravelPost)**

duration: "5 days"              # String
showOnMap: true                 # Boolean
location:                       # Location object
  name: "Interlaken, Switzerland"
  lat: 46.8182
  lng: 8.2275

**If category: food (FoodPost)**

foodType: "recipe"              # String: "recipe" or "review"
cuisine: "Japanese"             # String (e.g., Japanese, French)

# -- IF IT'S A RECIPE --
subcategory: "Recipes"
ingredients:                    # Array of items
  - "Matcha powder"
  - "Flour"

# -- IF IT'S A REVIEW --
price: "$$"                     # String indicating price tiers ($, $$, $$$)
rating: 4.8                     # Decimal Number out of 5
showOnMap: true                 # Boolean
location:
  name: "Paris, France"
  lat: 48.8566
  lng: 2.3522

**If category: academic (AcademicPost)**

projectType: "course-note"      # String: "course-note" or "project"
institution: "CMU"              # String representing your University/Academy

# For Padding

Ah! You meant the **`p-2`** value inside your Tailwind CSS `className="..."` string! I completely misread your context and went down a statistics rabbit hole—my bad!

In Tailwind CSS, the `p-` utility stands for **padding**. The value that follows it (`p-{value}`) can take several different forms depending on how much spacing you want to create.

Here is exactly what values you can use inside your `className`:

### 1. The Standard Numeric Scale

Tailwind uses a highly optimized, uniform spacing scale where **1 unit = 0.25rem (which equals 4px)** by default.

* **`p-0`** = `0px` (No padding at all)
* **`p-0.5`** = `2px`
* **`p-1`** = `4px`
* **`p-1.5`** = `6px`
* **`p-2`** = `8px` *(What you currently have)*
* **`p-2.5`** = `10px`
* **`p-3`** = `12px`
* **`p-4`** = `16px`
* **`p-5`** = `20px`
* **`p-6`** = `24px`
* **`p-8`** = `32px`

The scale continues up through numbers like `10`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `56`, `64`, tracking all the way up to **`p-96`** ($384\text{px}$).

---

### 2. Direction-Specific Values

Instead of applying padding to all four sides equally (`p-`), you can swap the prefix to target specific edges of your image wrapper:

* **Horizontal Padding (Left & Right):** Use **`px-{val}`** (e.g., `px-4`)
* **Vertical Padding (Top & Bottom):** Use **`py-{val}`** (e.g., `py-2`)
* **Single Edges:** * **`pt-`** (Padding Top)
* **`pb-`** (Padding Bottom)
* **`pl-`** (Padding Left)
* **`pr-`** (Padding Right)



---

### 3. Arbitrary Custom Values (The Escape Hatch)

If none of Tailwind's built-in steps give you the exact sizing you want, you can inject an **arbitrary value** using square brackets `[...]`. This allows you to type exact pixel, rem, or percentage sizes directly into the class name:

* **`p-[3px]`** (Locks the border spacing to exactly 3 pixels)
* **`p-[0.15rem]`** * **`p-[1%]`**

### Summary for your Photo Box:

Since you want the white border frame to look tighter around that placeholder image, try switching your class string from `p-2` to **`p-1`** or **`p-0.5`**!

# For fonts

In Tailwind CSS, utility classes like `text-xl font-serif italic text` are individual design building blocks. You can change or swap out every single one of these classes to completely customize the typography.

Here is exactly what each class controls and how you can customize it:

---

### 1. `text-xl` (Font Size)

This controls how large your text appears. Tailwind uses a standard scale ranging from tiny labels to massive display headers:

* **Smaller Options:** `text-xs` | `text-sm` | `text-base` *(default size)*
* **Medium Options:** `text-lg` | `text-xl` *(your current size)* | `text-2xl`
* **Large Display Options:** `text-3xl` | `text-4xl` | `text-5xl` | `text-6xl`

---

### 2. `font-serif` (Font Family)

This tells the browser which style of lettering shapes to use for your writing. Tailwind includes three default universal stacks:

* **`font-serif`**: Classic, elegant letters with small decorative feet/strokes at the ends (great for your editorial titles and quotes).
* **`font-sans`**: Clean, modern, geometric letters without feet (best for body paragraphs and highly readable interface buttons).
* **`font-mono`**: Monospaced lettering where every character takes up the exact same horizontal space (ideal for source code, math parameters, or clean numeric arrays).

---

### 3. `italic` (Font Style)

This controls the tilt of your text.

* **`italic`**: Tilts the text forward gracefully.
* **`not-italic`**: Forces the font back to standard, upright vertical letters (useful if a parent container is forcing an italic style that you want to undo).

---

### 4. `text` (Text Color Prefix)

On its own, just writing `text` doesn't do anything because it is missing its shade modifier. To apply a custom color palette, you append a color name and a weight value from `50` (lightest) to `950` (darkest):

* **Your Brand Colors:** `text-[#A84848]` (dark pink) | `text-[#2A1A18]` (deep dark brown)
* **Standard Neutrals:** `text-slate-700` | `text-zinc-500` | `text-neutral-900`
* **Core Tones:** `text-black` | `text-white`

---

### What else can you add to this list?

If you want to customize this text block even further, you can inject a few more typography utilities right into the string:

* **`font-bold` or `font-medium**`: Controls the thickness (weight) of the lines.
* **`tracking-widest` or `tracking-wider**`: Adds elegant horizontal letter-spacing between characters.
* **`leading-relaxed` or `leading-loose**`: Increases line-height spacing above and below sentences so long paragraphs don't look squished.
* **`uppercase` / `lowercase` / `capitalize**`: Instantly forces text transformations without manually re-typing the words.
