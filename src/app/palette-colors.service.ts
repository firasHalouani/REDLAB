import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaletteColorsService {
  baseColor="#98756"
  Palette(): [string, string,string] {
        const baseHSL = this.hexToHSL(this.baseColor);
        const complementaryHue = (baseHSL.h + 180) % 360;
        const complementaryColor = this.hslToHex({ h: complementaryHue, s: baseHSL.s, l: baseHSL.l });
        const analogousHue = (baseHSL.h + 30) % 360;
        const analogousColor = this.hslToHex({ h: analogousHue, s: baseHSL.s, l: baseHSL.l });
        return [this.baseColor, complementaryColor, analogousColor];
    }
    hexToHSL(hex: string): { h: number; s: number; l: number } {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        const l = (max + min) / 2;
        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return { h: h * 360, s: s * 100, l: l * 100 };
    }
    hslToHex(hsl: { h: number; s: number; l: number }): string {
        const h = hsl.h / Math.floor(Math.random()*360);
        const s = hsl.s / Math.floor(Math.random()*100);
        const l = hsl.l / Math.floor(Math.random()*360);
        const hueToRGB = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        const r = Math.floor(hueToRGB(p, q, h + 1 / 3) * 255);
        const g = Math.floor(hueToRGB(p, q, h) * 255);
        const b = Math.floor(hueToRGB(p, q, h - 1 / 3) * 255);
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
    }

 
}
