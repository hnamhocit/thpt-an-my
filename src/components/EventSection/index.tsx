import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import EventCard from "../EventCard";

const events = [
	{
		url: "/assets/images/events/1.jpg",
		title: "Hoạt động khai giảng",
		content:
			'Buổi lễ càng trở nên thiêng liêng và tràn đầy khí thế khi thầy Nguyễn Hoàng Hùng - Hiệu trưởng Nhà trường thực hiện nghi thức đánh trống khai giảng.Không chỉ vậy, buổi lễ còn khiến mọi người mãn nhãn với những tiêt mục văn nghệ hoành tráng. Các tiết mục vô cùng sáng tạo, sôi động từ các bạn học sinh đã thực sự "đốt cháy" sân khấu, khiến ngày khai giảng thêm phần rực rỡ và đáng nhớ.Ngoài ra, còn có các hoạt động vô cùng hấp dẫn diễn ra trong phần Hội. Trước tiên là Trồng cây xanh tạo cảnh quan xanh - sạch - đẹp cho khuôn viên trường học của các học sinh khối 10. Sau đó, là các hoạt động vui chơi của phần Hội. Ở khối 10 học sinh sẽ được Thi nhảy bao bố; khối 11 và 12 sẽ tham gia Đập bóng tiếp sức.Trước thời khắc thiêng liêng của năm học mới, xin được gửi lời chúc mừng và cảm ơn sâu sắc đến toàn thể các quý thầy cô giáo, các cán bộ công nhân viên nhà trường đã dành trọn tâm huyết của mình để xây dựng ngôi trường THPT An Mỹ ngày càng lớn mạnh. Chúc cho năm học 2024-2025 tại THPT An Mỹ sẽ là một năm học tràn đầy năng lượng, thành công và thật nhiều kỷ niệm đẹp!',
	},
	{
		url: "/assets/images/events/2.jpg",
		title: "Lễ nhà giáo Việt nam",
		content:
			"Một mùa tri ân nữa lại đến, hoà cùng không khí nô nức của ngày Nhà Giáo Việt Nam cả nước, trường THPT An Mỹ đã tổ chức những hoạt động thi đua tích cực và ý nghĩa nhằm tạo cơ hội cho các bạn học sinh gửi gắm yêu thương đến những “người cha, người mẹ thứ hai” của cuộc đời. Các hoạt động chào mừng đã được tổ chức vào chiều ngày 16/11/2024 với các nội dung: thi cắm hoa, thi làm thiệp đẹp, thi bức ảnh kỉ niệm và đã được các Chi đoàn hưởng ứng nhiệt tình. Họ không cần ánh đèn sân khấu, không cần những tràng pháo tay rộn rã. Chỉ cần viên phấn trắng trên tay, họ đã hóa thân thành những nghệ sĩ của tâm hồn, biến bục giảng thành sân khấu của riêng mình. Thầm lặng mà cao quý, họ cống hiến cho tương lai đất nước bằng sự nghiệp trồng người thiêng liêng. Xin gửi đến những người thầy, người cô - những người lái đò cần mẫn, hàng ngàn lời tri ân sâu sắc, hàng ngàn lời chúc sức khỏe và bình an. Ước mong rằng mai này, dù thời gian có phủ bụi mờ lên kí ức, chúng em vẫn luôn giữ gìn những khoảnh khắc tươi đẹp dưới mái trường yêu dấu, nơi có những bài học quý giá và tình thầy trò ấm áp. ",
	},
	{
		url: "/assets/images/events/3.jpg",
		title: "TƯ VẤN TÂM LÝ - CHĂM SÓC SỨC KHOẺ VỊ THÀNH NIÊN CHO HỌC SINH KHỐI 10 ",
		content:
			"Chiều ngày 23/11/2024, trường THPT An Mỹ đã tổ chức buổi ngoại khoá tư vấn tâm lý sức khoẻ tuổi vị thành viên cho 160 học sinh khối 10. Đây là một hoạt động rất ý nghĩa, thiết thực và quan trọng đối với các bạn học sinh để các bạn nhận thức và tiếp thu kiến thức về thân thể, tâm lí trong giai đoạn tuổi dậy thì.Trong suốt buổi sinh hoạt, các bạn học sinh đã được lắng nghe nhiều điều về sức khoẻ, cách chăm sóc và bảo vệ bản thân khi ở lứa tuổi vị thành niên do Bác sĩ Nguyễn Ngọc Hưng chia sẻ. Các bạn đã rất chăm chú và tích cực tham gia trả lời những câu hỏi liên quan đến kiến thức của buổi tư vấn để được nhận những phần quà vô cùng xứng đáng với tinh thần của các bạnMong rằng sau buổi sinh hoạt đầy bổ ích này, các bạn sẽ có thêm những kiến thức nền tảng để chăm sóc tốt cho bản thân và những người xung quanh. Chúc các bạn sẽ có một hành trình tuổi trẻ rực rỡ",
	},
	{
		url: "/assets/images/events/4.jpg",
		title: "Hội vui xuân",
		content:
			"Chào mừng thành công Đại hội Đoàn TNCS Hồ Chí Minh toàn quốc lần thứ XV; Căn cứ theo chương trình công tác Đoàn và phong trào thanh niên năm học 2023- 2024 của Ban chấp hành Đoàn trường, trường THPT An Mỹ đã tổ chức thành công lễ hội “Vui xuân Giáp Thìn 2024” nhằm tạo nên bầu không khí Tết đến vui tươi, ấm áp; tạo sân chơi lành mạnh, bổ ích cho học sinh vui xuân đón Tết. ",
	},
];

const EventSection = () => {
	const { ref, inView } = useInView();

	return (
		<div ref={ref} className="space-y-5 overflow-hidden">
			<div
				className={clsx("text-3xl font-bold text-center", {
					"animate__animated animate__bounceInRight": inView,
				})}
				id="events"
			>
				Hoạt động & Lễ hội
			</div>

			<div
				className={clsx("container grid gap-5 md:grid-cols-2", {
					"animate__animated animate__bounceInRight": inView,
				})}
			>
				{events.map((event) => (
					<EventCard {...event} key={event.url} />
				))}
			</div>
		</div>
	);
};

export default EventSection;
