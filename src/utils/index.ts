// initialItems that holds an array of 29 million entries (for some reason)
// where each one of them has id: property (index), then isSelected to denote whether it is selected
export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    // in this particular case, this will only hold true, for the last element in the array
    isSelected: i === 29_999_998,
  };
});
