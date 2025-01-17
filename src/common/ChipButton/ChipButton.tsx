import * as S from '@/common/ChipButton/ChipButton.styles';
import { useState } from 'react';

const ChipButton = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const showMessage = () => {
		setIsOpen(!isOpen);
	};
	return (
		<S.Container>
			<S.ChipButton
				type="button"
				aria-label="안내메세지 보기"
				onClick={showMessage}
				aria-describedby="passenger-description"
			>
				?
			</S.ChipButton>
			<S.Message
				isOpen={isOpen}
				id="passenger-description"
				role={'tooltip'}
				aria-atomic="true"
				aria-live="assertive"
			>
				성인인 승객의 수를 아래의 +, - 버튼 또는 직접입력을 통해 기입해주세요
			</S.Message>
		</S.Container>
	);
};

export default ChipButton;
