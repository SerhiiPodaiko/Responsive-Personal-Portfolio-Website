const SectionTitle = ({ title }) => (
    <div className='flex items-center gap-5'>
        <h2 className='ftext-3xl font-semibold text-textGreen'>
            {title}
        </h2>
        <div className='w-72 h-[2px] bg-textGreen'></div>
    </div>

)

export default SectionTitle