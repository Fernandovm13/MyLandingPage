import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === 'production';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  if (!isProd) return normalizedPath;
  if (path.startsWith('http')) return path;
  
  const basePath = '/MyLandingPage';
  if (normalizedPath.startsWith(basePath)) return normalizedPath;
  
  return `${basePath}${normalizedPath}`;
}
