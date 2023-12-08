const instruction = () => {
  const labelListInstruction = document.querySelector('._label-list__instruction');
  const labelListInstructionText = labelListInstruction.querySelector('._label-list__instruction-text');

  let isOpen = false; // Флаг для отслеживания состояния

  labelListInstruction.addEventListener('click', () => {
      const labelListInstructionTextHeight = labelListInstructionText.scrollHeight;
      const labelListInstructionHeight = labelListInstruction.scrollHeight;

      if (isOpen) {
          // Если элемент уже открыт, устанавливаем максимальную высоту в 44px
          labelListInstruction.style.maxHeight = '44px';
          labelListInstruction.classList.remove('_open');
      } else {
          // Если элемент закрыт, устанавливаем максимальную высоту в высоту текста плюс паддинги
          labelListInstruction.style.maxHeight = labelListInstructionHeight + labelListInstructionTextHeight + 'px';
          labelListInstruction.classList.add('_open');
      }

      isOpen = !isOpen; // Инвертируем состояние
  });
};

instruction();
