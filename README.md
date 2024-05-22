# ColourPalette - CSS Variable Generator Website

## Routes

- "/" : homepage
    - CSS generator available here
- "/generator" : CSS generator page
    - CSS generator available here
- "/generator/saved" : view list of saved themes
    - reads localstorage


## Contexts

- Base Colour 
    - hex colour of new theme
- Localstorage manager for list of CSS themes
    - Array of Theme Lists
- Localstorage manager for current CSS theme
    - One Theme List
- list of CSS themes
    - Array of Theme Lists
- Current CSS theme
    - One Theme List


## Data

### Colour Object

```JS
{
    hex: "#000000",
    strength: 100,
    rgba: [255, 255, 255, 255]
}
```

### Theme List 

```JS
{
    name: "violet eggplant",
    colours: [
        // Colour objects go here
    ]
}
```

