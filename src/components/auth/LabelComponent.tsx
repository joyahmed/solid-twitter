interface LabelComponentProps {
	text: string;
}

const LabelComponent = ({ text }: LabelComponentProps) => (
	<label class='block text-sm font-medium text-white'>{text}</label>
);

export default LabelComponent;
