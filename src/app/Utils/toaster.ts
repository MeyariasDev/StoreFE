import * as StartToastifyInstance from "toastify-js";

interface IToastify {
    name: string
    color: string
}

export const alert2 = (text = "", type = "info") => {
    let colors: IToastify[] = [
        {
            name: "info",
            color: "linear-gradient(to right, #41d2c1, #43483b)",
        },
        {
            name: "error",
            color: "linear-gradient(to right, #ad1437, #464b3f)",
        },
        {
            name: "success",
            color: "linear-gradient(to right, rgb(20 173 46), rgb(103 106 98))",

        },


    ];
    StartToastifyInstance({
        text: text,
        className: type,
        style: {
            background: colors.find((e: IToastify) => e.name === type)?.color ?? "linear-gradient(to right, #41d2c1, #43483b)",
        },
    }).showToast();
};


