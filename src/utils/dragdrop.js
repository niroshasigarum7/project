export const allowDrop = (ev) => {
    ev.preventDefault();
}
export const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
}