import { motion } from "motion/react";

const sections = [
	{
		thumbnailURL:
			"https://base.vn/wp-content/uploads/2024/06/phong-cach-lanh-dao.webp",
		title: "Lãnh đạo đơn vị",
		items: [
			"Tổng số giáo viên, nhân viên đầu năm học 2021-2022 là 81 người. Trong đó:",
			"Bộ phận hành chính, bảo vệ, phục vụ: 11 người (Đại học: 05).",
			"Giáo viên trực tiếp tham gia dạy lớp: 64 người, trong đó 100% giáo viên đạt chuẩn, 17/64 giáo viên là Thạc sĩ.",
		],
	},
	{
		thumbnailURL:
			"https://ischool.vn/wp-content/uploads/2023/07/phuong-phap-hoc-toan-hieu-qua-thumb.jpeg",
		title: "Tổ Toán: 11 giáo viên",
		items: [
			"Tổ trưởng chuyên môn: Thầy Phạm Đỗ Hải.",
			"Tổ phó chuyên môn: Cô Nguyễn Thị Phương Thảo.",
		],
	},
	{
		thumbnailURL:
			"https://thpthanthuyen.bacninh.edu.vn/upload/63110/fck/27000701/2024_05_04_01_10_281.jpg",
		title: "Tổ Văn: 09 giáo viên",
		items: [
			"Tổ trưởng chuyên môn: Thầy Nông Ngọc Trọng.",
			"Tổ phó chuyên môn: Cô Nguyễn Thanh Hiền.",
		],
	},
	{
		thumbnailURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWa4KIAceCgjbp1eFhiI1cJLQnxsIPiGEOQ&s",
		title: "Tổ Ngoại ngữ: 08 giáo viên.",
		items: [
			"Tổ trưởng chuyên môn: Cô Võ Thị Phượng.",
			"Tổ phó chuyên môn: Cô Trần Thị Tường Vi.",
		],
	},
	{
		thumbnailURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLDJOBKt-wUmWJusD3A2igB-AF04KcuW5yw&s",
		title: "Tổ Lý: 06 giáo viên.",
		items: [
			"Tổ trưởng chuyên môn: Cô Nguyễn Hoài Thu",
			"Tổ phó chuyên môn: Thầy Đoàn Minh Phong",
		],
	},
	{
		thumbnailURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxauapdgfrc4bwAbAZSYojcpfV591glH1Rg&s",
		title: "Tổ Hóa: 07 giáo viên",
		items: [
			"Tổ trưởng chuyên môn: Cô Đinh Kim Cúc",
			"Tổ phó chuyên môn: Cô Đào Thị Hưng Minh",
		],
	},
	{
		thumbnailURL:
			"https://fbb.hcmus.edu.vn/vnt_upload/university_4/thumbs/370_crop__CT_YYi_tra.jpg",
		title: "Tổ Sinh-Kỹ thuật nông nghiệp: 05 giáo viên",
		items: ["Tổ trưởng chuyên môn: Cô Bùi Thị Lan Anh"],
	},
	{
		thumbnailURL:
			"https://luathoangphi.vn/wp-content/uploads/2021/12/vi-sao-phai-hoc-lich-su.jpg?v=1640664945",
		title: "Tổ Sử-Địa-Giáo dục công dân: 08 giáo viên",
		items: [
			"Tổ trưởng chuyên môn: Thầy Nguyễn Văn Bé",
			"- Tổ phó chuyên môn: Thầy Vũ Văn Quyết",
		],
	},
	{
		thumbnailURL:
			"https://daotaobinhduong.com/wp-content/uploads/2021/06/20-768x576-1.png",
		title: "Tổ Tin học-Kỹ thuật công nghiệp: 06 giáo viên",
		items: ["Tổ trưởng chuyên môn: Thầy Lê Kỳ Nhân"],
	},
	{
		thumbnailURL:
			"https://image.luatvietnam.vn/uploaded/twebp/images/original/2023/08/11/quoc-phong-la-gi-vai-tro-va-chinh-sach-cua-quoc-phong_1108231936.jpg",
		title: "Tổ Giáo dục thể chất-Quốc phòng an ninh: 06 giáo viên",
		items: [
			"Tổ trưởng chuyên môn: Thầy Nguyễn Văn Của",
			"Tổ phó chuyên môn: Thầy Phạm Việt Diệp",
		],
	},
	{
		thumbnailURL:
			"https://image.luatvietnam.vn/uploaded/twebp/images/original/2023/03/20/hanh-chinh-la-gi-hanh-chinh-la-hoat-dong-duoi-su-lanh-dao-cua-chinh-phu_2003090659.jpg",
		title: "Tổ Hành chính",
		items: [
			"Tổ trưởng: Cô Nguyễn Thị Bích Liên",
			"Tổ phó: Thầy Phạm Văn Tiến",
		],
	},
];

const TeachersSection = () => {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
			{sections.map((section) => {
				const [subject, amount] = section.title.split(":");

				return (
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="cursor-pointer bg-white shadow-md border rounded-2xl"
						key={section.title}
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
					>
						<div
							className="bg-cover bg-center bg-no-repeat min-h-40 rounded-t-2xl"
							style={{
								backgroundImage: `url(${section.thumbnailURL})`,
							}}
						></div>

						<div className="p-4 pt-7 space-y-3">
							<div className="text-xl text-primary font-bold text-center">
								{subject} {amount && `(${amount.trim()})`}
							</div>

							{section.items.map((item) => {
								const [label, text] = item.split(":");
								return (
									<div key={item}>
										<span className="font-medium">
											{label}
										</span>
										:{" "}
										<span className="underline underline-offset-4 decoration-2 decoration-pink-500">
											{text}
										</span>
									</div>
								);
							})}
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default TeachersSection;
