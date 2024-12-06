import EventSection from "@/components/EventSection";
import Header from "@/components/Header";
import HistorySection from "@/components/HistorySection";

export default function Home() {
	return (
		<>
			<Header />

			<div
				className="mb-5 relative h-[calc(100vh-64px)] bg-left bg-no-repeat bg-cover min-h-80"
				style={{
					backgroundImage: "url(/assets/images/hero.jpg)",
				}}
			>
				<div className="absolute space-y-5 text-center -translate-x-1/2 -translate-y-1/2 lobster-regular top-1/2 left-1/2">
					<div className="text-5xl font-black tracking-wide animate__animated animate__bounceInDown">
						Trường THPT An Mỹ
					</div>
					<div className="text-3xl font-bold tracking-wide animate__animated animate__bounceInDown">
						Thi đua dạy tốt học tốt
					</div>
				</div>
			</div>

			<div className="container p-4 space-y-10">
				<HistorySection />
				<EventSection />

				<div className="text-3xl font-bold text-center" id="teachers">
					Giáo viên bộ môn
				</div>

				<div
					className="text-3xl font-bold text-center"
					id="classNamees-rooms"
				>
					Sơ đồ lớp học - Phòng học
				</div>

				<div className="p-4 text-center border-2">
					Make By Nguyễn Hoàng Nam 2024, COPYRIGHT, ALL RIGHT REVERSE
				</div>
			</div>
		</>
	);
}
