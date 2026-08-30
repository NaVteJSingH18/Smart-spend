const SummaryCard = ({ title, amount, color }) => {
    return (
        <div
            className="
                bg-white
                rounded-2xl
                shadow-lg
                p-6
                hover:shadow-xl
                transition
                duration-300
            "
        >

            <h2 className="text-gray-500 text-sm uppercase tracking-wide">
                {title}
            </h2>

            <p className={`text-4xl font-bold mt-4 ${color}`}>
                ₹{amount.toLocaleString()}
            </p>

        </div>
    );
};

export default SummaryCard;