const SummaryCard = ({ title, amount, color }) => {
    return (
        <div
            className="
                bg-white
                rounded-2xl
                shadow-sm
                border
                border-gray-100
                p-6
                hover:shadow-md
                hover:-translate-y-1
                transition
                duration-300
            "
        >

            <h2 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">
                {title}
            </h2>

            <p className={`text-4xl font-bold ${color}`}>
                ₹{amount.toLocaleString()}
            </p>

        </div>
    );
};

export default SummaryCard;