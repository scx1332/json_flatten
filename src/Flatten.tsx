import React, { useContext } from "react";


interface FlattenProps {
    node: any;
}

const Flatten = (props: FlattenProps) => {

    //check if node is a list
    const isArray = Array.isArray(props.node);
    const isObject = typeof props.node === "object";

    //iterate over json and return a list of elements in div
    if (isArray) {
        return (
            <div className={"array-container"}>{
                props.node.map((item: any) => (
                    <div className={"array-entry"} key="dupa">
                        <Flatten node={item}/>
                    </div>
                ))
            }
            </div>
        );
    } else if (isObject) {
        return (
            <div className={"map-container"}>{
                Object.keys(props.node).map((key: any) => (
                    <div className={"map-entry"} key="dupa">{key} - <Flatten node={props.node[key]}/></div>
                ))}
            </div>
        );
    } else {
        const is_bool = typeof props.node === "boolean";

        if (is_bool) {
            return (
                <div className={"final-content"}>{props.node ? "true" : "false"}</div>
            );
        }
        return (
            <div className={"final-content"}>{props.node}</div>
        );
    }


};

export default Flatten;