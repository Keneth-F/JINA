export function createColumnButton() {
  const container = document.createElement('div');
  container.className = 'flex flex-shrink-0';

  const button = document.createElement('button');
  button.className = 'flex items-center justify-center gap-3 w-72 h-10 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100 bg-slate-50/35';
  button.innerHTML = `<i class='bx bx-plus'></i><span class="block text-sm font-semibold">Add Column</span>`;

  container.appendChild(button);

  return { container, button };
}