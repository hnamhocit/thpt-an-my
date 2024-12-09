import { motion } from "motion/react";
import { memo } from "react";

const timelines = [
	{
		timestamp: "thập niên 30",
		content:
			"trường làng được khởi dựng tại làng An Mỹ, đất Thủ Dầu Một xưa, ban đầu chỉ là một vài phòng học đơn sơ…",
	},
	{
		timestamp: "Năm 1948",
		content:
			"trường Tiểu học An Mỹ được hình thành nhưng cơ sở vật chất còn thiếu thốn. Sau bậc Tiểu học, các em học sinh muốn học ở bậc Trung học thì phải tìm về đất Sài Gòn (TP HCM hiện tại). - Hiểu được sự vất vả của người dân, sự khao khát học tập của các em học sinh, luật sư Trần Văn Trai, người gốc làng An Mỹ quyết tâm xây dựng một trường Trung học tại quê nhà, tạo điều kiện cho con em địa phương được tiếp tục sự học để nâng cao dân trí, dân sinh sau này…",
	},
	{
		timestamp: "Năm 1958",
		content:
			"trường Trung học An Mỹ được xây dựng với một dãy chính diện có 07 phòng: 01 phòng Giám hiệu và 06 phòng học. Như vậy, năm 1958 là năm chính thức Trường Trung học An Mỹ được thành lập.",
	},
	{
		timestamp: "năm 1976 đến năm 1992",
		content:
			"Trường Trung học An Mỹ trở thành trường Sư phạm cấp II Sông Bé.",
	},
	{
		timestamp: "Năm 1993",
		content:
			"Trường Sư phạm cấp II Sông Bé chuyển về cơ sở mới. Và chính thức tháng 8 năm 1993, tên trường từ Trường Phổ thông cơ sở Phú Mỹ 2 thành Trường Trung học cơ sở An Mỹ.",
	},
	{
		timestamp: "Ngày 01 tháng 06 năm 1999",
		content:
			"Ủy ban Nhân dân Tỉnh Bình Dương ra quyết định công nhận đơn vị là trường Trung học phổ thông An Mỹ (gồm hai cấp học: cấp II và cấp III).",
	},
	{
		timestamp: "Ngày 12 tháng 6 năm 2012",
		content:
			"Tách khối trung học cơ sở của Trường THPT An Mỹ chuyển về Trường THCS Phú Mỹ, thuộc Phòng GD&ĐT Thành phố Thủ Dầu Một.",
	},
	{
		timestamp: "2012 - 2013",
		content:
			'Trường THPT chỉ gồm bậc học THPT với các lớp khối 10, khối 11 và khối 12. - Phương châm của nhà trường: “Giữ gìn và phát huy truyền thống học sinh Trung học An Mỹ qua nhiều thế hệ, cùng hướng đến tương lai”. - Sứ mệnh đặt ra: “Giảng dạy tốt - Học tập chăm - Thực hành giỏi" ',
	},
];

const HistorySection = () => {
	return (
		<>
			<div
				className={
					"grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5"
				}
			>
				<div
					className="bg-center bg-no-repeat border bg-cover rounded-2xl min-h-40"
					style={{
						backgroundImage: "url(/assets/images/history/1.jpg)",
					}}
				></div>
				<div
					className="bg-center border bg-no-repeat bg-cover rounded-2xl min-h-40"
					style={{
						backgroundImage: "url(/assets/images/history/2.jpg)",
					}}
				></div>
				<div
					className="bg-center border bg-no-repeat bg-cover rounded-2xl min-h-40"
					style={{
						backgroundImage: "url(/assets/images/history/3.jpg)",
					}}
				></div>
				<div
					className="bg-center border bg-no-repeat bg-cover rounded-2xl min-h-40"
					style={{
						backgroundImage: "url(/assets/images/history/4.jpg)",
					}}
				></div>
				<div
					className="bg-center border bg-no-repeat bg-cover rounded-2xl min-h-40"
					style={{
						backgroundImage: "url(/assets/images/history/5.png)",
					}}
				></div>
			</div>

			<ol className="relative border-l border-pink-200">
				{timelines.map((timeline) => (
					<motion.li
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						key={timeline.timestamp}
						className="mb-10 ml-4"
					>
						<div className="absolute w-3 h-3 bg-pink-200 rounded-full mt-1.5 -start-1.5 border border-pink-200"></div>

						<time className="font-medium uppercase">
							{timeline.timestamp}
						</time>

						<p className="mt-2 text-sm text-gray-700">
							{timeline.content}
						</p>
					</motion.li>
				))}
			</ol>
		</>
	);
};

export default memo(HistorySection);
