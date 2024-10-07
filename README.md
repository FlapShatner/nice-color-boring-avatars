# Nice color boring avatars

Using [Boring Avatars](https://github.com/boringdesigners/boring-avatars) under the hood to generate custom, SVG-based avatars from any username, this library adds a list of 100 color palettes and applies it to the avatar automatically based on the provided username. 


## Install

```
npm install nice-color-boring-avatars
```

## Usage

```jsx
import GeneratedAvatar from 'nice-color-boring-avatars';

<GeneratedAvatar name="Maria Mitchell" />;
```

### Props

| Prop    | Type                                                         | Default                                                   |
|---------|--------------------------------------------------------------|-----------------------------------------------------------|
| size    | number or string                                             | `40px`                                                    |
| square  | boolean                                                      | `false`                                                   |
| title   | boolean                                                      | `false`                                                   |
| name    | string                                                       | `Clara Barton`                                            |
| variant | oneOf: `marble`, `beam`, `pixel`,`sunset`, `ring`, `bauhaus` | `marble`                                                  |



#### Name
The `name` prop is used to generate the avatar. It can be the username, email or any random string.

```jsx
<GeneratedAvatar name="Maria Mitchell"/>
```

#### Variant
The `variant` prop is used to change the theme of the avatar. The available variants are: `marble`, `beam`, `pixel`, `sunset`, `ring` and `bauhaus`.

```jsx
<GeneratedAvatar name="Alice Paul" variant="beam"/>
```

#### Size
The `size` prop is used to change the size of the avatar.

```jsx
<GeneratedAvatar name="Ada Lovelace" size={88}/>
```

#### Square
The `square` prop is used to make the avatar square.

```jsx
<GeneratedAvatar name="Helen Keller" square/>
```
