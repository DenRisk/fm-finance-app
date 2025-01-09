type HeadingProps = {
    text: string;
};

export default function Heading({text}: HeadingProps) {
    return (
        <header className='w-full min-h-14'>
            <h1 className='text-1'>{text}</h1>
        </header>
    );
}
