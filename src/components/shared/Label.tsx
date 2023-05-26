export interface ILabel {
    labelText: string;
}

export const Label = (props: ILabel) => {
    return (
        <>
            <span className="text-3xl font-bold underline">{props.labelText}</span><span>{" "}</span>
        </>
    );
} 