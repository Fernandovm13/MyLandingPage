import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = '/MyLandingPage';
  
  if (!isProd) return path;
  if (path.startsWith('http')) return path;
  
  // Ensure we don't double prefix if paths are already prefixed
  if (path.startsWith(basePath)) return path;
  
  // Ensure the path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
