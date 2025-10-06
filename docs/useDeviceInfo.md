# 📱 useDeviceInfo

Una pequeña utilidad en TypeScript para detectar si el dispositivo actual es **mobile, tablet, desktop, widescreen o fullhd**, basado en el ancho de la ventana (`window.innerWidth`).


---

## 🔑 Tipos Exportados

```ts
export type DeviceType = "mobile" | "tablet" | "desktop" | "widescreen" | "fullhd";

export interface DeviceInfo {
  type: DeviceType;
  width: number;
  height: number;
}
```

---

## 🚀 Funciones Exportadas

### `getDeviceType(width?: number): DeviceType`
Devuelve el tipo de dispositivo según el ancho.

- `width` *(opcional)*: Número que representa el ancho en píxeles.  
  Si no se pasa, usa `window.innerWidth`.

Ejemplo:
```ts
import { getDeviceType } from "./useDeviceInfo";

console.log(getDeviceType()); // "desktop"
console.log(getDeviceType(500)); // "mobile"
```

---

### `getDeviceInfo(): DeviceInfo`
Devuelve un objeto con la información del dispositivo:

- `type`: El tipo de dispositivo.  
- `width`: Ancho actual en píxeles.  
- `height`: Alto actual en píxeles.  

Ejemplo:
```ts
import { getDeviceInfo } from "./useDeviceInfo";

const info = getDeviceInfo();
console.log(info);
// { type: "desktop", width: 1366, height: 768 }
```

---

### `onDeviceChange(callback: (info: DeviceInfo) => void): () => void`
Ejecuta una función cada vez que cambia el tamaño de la ventana.

- `callback`: Función que recibe la nueva información del dispositivo.  
- Retorna una función para **desuscribirse** del evento.

Ejemplo:
```ts
import { onDeviceChange } from "./useDeviceInfo";

const unsubscribe = onDeviceChange((device) => {
  console.log("Nuevo tipo:", device.type);
});

// Más tarde puedes detener el listener
unsubscribe();
```

---

## ✅ Ejemplo Completo

```ts
import { getDeviceInfo, onDeviceChange } from "./useDeviceInfo";

const info = getDeviceInfo();
console.log("Dispositivo inicial:", info.type);

onDeviceChange((device) => {
  console.log("Cambio detectado:", device);
});
```

---

## 📊 Breakpoints usados

- `mobile`: `< 769px`
- `tablet`: `769px – 1023px`
- `desktop`: `1024px – 1215px`
- `widescreen`: `1216px – 1407px`
- `fullhd`: `≥ 1408px`

---

## 📜 Licencia
MIT
