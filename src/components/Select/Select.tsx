import module from "module";
import {inspect} from "util";
import styles from "./Select.module.css"
import {useState, KeyboardEvent, useEffect} from "react";


type ItemType = {
    title: string
    value?: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        sethoveredElementValue(props.value)
    }, [props.value])
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            console.log('111')
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretentElement) {
                        props.onChange(pretentElement.value)
                        return;
                    }
                }
            }
             if (!selectedItem) {
                 props.onChange(props.items[0].value)
             }
        }
        if (e.key === "Escape" || e.key === "Enter") {
            setActive(false)
        }
    }

    return (
        <>

            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title} </span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : '')}
                            onMouseEnter={() => {
                                sethoveredElementValue(i.value)
                            }}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}</div>)}
                    </div>
                }

            </div>
        </>
    )
}