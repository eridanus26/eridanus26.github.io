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