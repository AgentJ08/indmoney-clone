import Link from "next/link";

const allCalculators = [
    { name: 'Retirement', link: '/calculators/retirement-calculator' },
    { name: 'Salary', link: '#' },
    { name: 'HRA', link: '#' },
    { name: 'Brokerage', link: '#' },
    { name: 'Regular vs Direct Mutual Fund', link: '#' },
    { name: 'NPS', link: '#' },
    { name: 'Inflation', link: '#' },
    { name: 'SIP', link: '#' },
    { name: 'Lumpsum', link: '#' },
    { name: 'SWP', link: '#' },
    { name: 'STP', link: '#' },
    { name: 'Mutual Fund Returns', link: '#' },
    { name: 'SSY', link: '#' },
    { name: 'PPF', link: '#' },
    { name: 'FD', link: '#' },
    { name: 'RD', link: '#' },
    { name: 'EMI', link: '#' },
    { name: 'Credit Card EMI', link: '#' },
    { name: 'HDFC Home Loan EMI', link: '#' },
    { name: 'SBI Home Loan EMI', link: '#' },
    { name: 'Education Loan EMI', link: '#' },
    { name: 'Car Loan EMI', link: '#' },
    { name: 'Bike Loan EMI', link: '#' },
    { name: 'Home Loan EMI', link: '#' },
    { name: 'Personal Loan EMI', link: '#' },
    { name: 'Simple Interest', link: '#' },
    { name: 'Compund Interest', link: '#' },
    { name: 'NSC', link: '#' },
    { name: 'Gratuity', link: '#' },
    { name: 'CAGR', link: '#' },
    { name: 'GST', link: '#' },
    { name: 'Post Office RD', link: '#' },
    { name: 'Interest Rate', link: '#' },
    { name: 'Post Office FD', link: '#' },
    { name: 'Post Office PPF', link: '#' },
    { name: 'Income Tax', link: '#' },
    { name: 'Term Insurance', link: '#' },
    { name: 'APY', link: '#' },
    { name: 'Post Office MIS', link: '#' },
    { name: 'Step Up SIP', link: '#' },
    { name: 'Discount', link: '#' },
    { name: 'HDFC FD', link: '#' },
    { name: 'SBI FD', link: '#' },
    { name: 'ICICI FD', link: '#' },
    { name: 'Axis FD', link: '#' },
]

export default function Home() {

    return (
        <div className=" flex flex-col gap-10 p-2 w-[85%] mx-auto">
            <p className=" font-bold text-4xl ">Calculators</p>
            <div className=" flex flex-row flex-wrap gap-6 justify-start ">
                {allCalculators.map((calculator, index) => (
                    <Link key={index} href={calculator.link}>
                        <p className=" border-2 rounded-lg border-slate-200 text-xl w-80 h-28 px-8 hover:shadow-md transition-all flex flex-row justify-start items-center flex-wrap ">{calculator.name} Calculator</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
