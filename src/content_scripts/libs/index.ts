export const onEnter = (event: KeyboardEvent, callback: VoidFunction) => {
  if (event.key === "Enter") {
    callback();
  }
};

export const newLine = (value: string) => {
  if (value) {
    return value + "\n";
  }

  return value;
};

export const removeFullStop = (word: string) => {
  return word.replace(".", "");
};

export const getInputPromptElements = () => {
  const promptBox = document.getElementById(
    "prompt-textarea"
  ) as HTMLInputElement;
  const promptBoxWrapper = promptBox?.parentElement?.parentElement;

  return {
    promptBox,
    promptBoxWrapper,
  };
};
