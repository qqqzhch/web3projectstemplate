import { create, StateCreator } from 'zustand'
import { createBearSlice, BearSlice } from './BearSlice'
import { createFishSlice, FishSlice } from './FishSlice'
import { useStore } from 'zustand'

type AppState = BearSlice & FishSlice

const useBoundStore = create<AppState>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a)
}))

export function useAppStore(): AppState
export function useAppStore<T>(selector: (state: AppState) => T, equals?: (a: T, b: T) => boolean): T
export function useAppStore<T>(selector?: (state: AppState) => T, equals?: (a: T, b: T) => boolean) {
  return useStore(useBoundStore, selector!, equals)
}