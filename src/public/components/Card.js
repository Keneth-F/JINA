import { MoveIcon } from "../assets/icons/index.js"
export const CreateTag = (tag, cb) => cb(document.createElement(tag))
export const Card = ({ title }) => CreateTag("div",
    (d) => {
        d.className = "w-full",
            d.appendChild(CreateTag("div",
                (d1) => {
                    d1.className = "border m-1 p-2",
                        d1.appendChild(CreateTag("div",
                            (d2) => {
                                d2.className = "flex gap-1 items-center mb-6";
                                d2.appendChild(MoveIcon())
                                d2.appendChild(CreateTag("div",
                                    (d3) => {
                                        d3.className = "flex-1 text-center",
                                            d3.textContent = title
                                        return d3
                                    }))
                                return d2
                            }))
                    return d1
                }))
        return d
    })