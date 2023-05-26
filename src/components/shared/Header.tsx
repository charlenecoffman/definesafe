export interface IHeader {
    headerText: string;
}

export const Header = (props: IHeader) => {
    return (
        <>
            <h3 className="text-3xl font-bold">{props.headerText}</h3>
        </>
    );
} 