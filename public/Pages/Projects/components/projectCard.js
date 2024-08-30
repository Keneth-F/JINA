export function createProjectCard({ title, bgColor, id }) {
  const box = document.createElement('a');
  box.className = `w-48 h-24 flex justify-center items-center text-center border-2 border-black border-solid rounded cursor-pointer text-gray-600 text-2xl transition-transform duration-300 order-[999] hover:text-gray-500 hover:scale-105 ${bgColor}`;
  box.href = "project?id=" + id
  box.textContent = title;
  return box;
}