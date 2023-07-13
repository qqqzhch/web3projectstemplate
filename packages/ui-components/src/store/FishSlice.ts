import { create, StateCreator } from 'zustand'
import { BearSlice} from './BearSlice'


export interface FishSlice {
    fishes: number
    addFish: () => void
  }

export  const createFishSlice: StateCreator<
    BearSlice & FishSlice,
    [],
    [],
    FishSlice
  > = (set) => ({
    fishes: 0,
    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
  })