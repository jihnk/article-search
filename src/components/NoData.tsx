import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { ReactComponent as ScrapIcon } from "../assets/scrap.svg";
import { filterState } from "../recoil/atom";
import Button from "./common/Button";

const NoData = () => {
	const navigation = useNavigate();
	const reset = useResetRecoilState(filterState);

	const onClick = () => {
		reset();
		navigation(`/`);
	};

	return (
		<div className="flex flex-col h-screen justify-center items-center px-10">
			<ScrapIcon stroke={"#6D6D6D"} />
			<p className="mt-2 mb-5 font-semibold text-lg text-unactive tracking-tighter">
				저장된 스크랩이 없습니다.
			</p>
			<Button text="스크랩 하러 가기" onClick={onClick} />
		</div>
	);
};
export default NoData;
