import {motion} from "motion/react"

const sections = [
	{ title: 'Lãnh đạo đơn vị', 
	 items: ['Tổng số giáo viên, nhân viên đầu năm học 2021-2022 là 81 người. Trong đó:', 
			 'Bộ phận hành chính, bảo vệ, phục vụ: 11 người (Đại học: 05).', 
			 'Giáo viên trực tiếp tham gia dạy lớp: 64 người, trong đó 100% giáo viên đạt chuẩn, 17/64 giáo viên là Thạc sĩ.']},
	{title: 'Tổ Toán: 11 giáo viên', items: ['Tổ trưởng chuyên môn: Thầy Phạm Đỗ Hải.', 'Tổ phó chuyên môn: Cô Nguyễn Thị Phương Thảo.']},
	{ title: 'Tổ Văn: 09 giáo viên', items: ['Tổ trưởng chuyên môn: Thầy Nông Ngọc Trọng.', 'Tổ phó chuyên môn: Cô Nguyễn Thanh Hiền.'] },
	{ title: 'Tổ Ngoại ngữ: 08 giáo viên.', items: ['Tổ trưởng chuyên môn: Cô Võ Thị Phượng.', 'Tổ phó chuyên môn: Cô Trần Thị Tường Vi.'] },
	{ title: 'Tổ Lý: 06 giáo viên.', items: ['Tổ trưởng chuyên môn: Cô Nguyễn Hoài Thu', 'Tổ phó chuyên môn: Thầy Đoàn Minh Phong'] },
	{ title: 'Tổ Hóa: 07 giáo viên', items: ['Tổ trưởng chuyên môn: Cô Đinh Kim Cúc', 'Tổ phó chuyên môn: Cô Đào Thị Hưng Minh'] },
	{ title: 'Tổ Sinh-Kỹ thuật nông nghiệp: 05 giáo viên', items: ['Tổ trưởng chuyên môn: Cô Bùi Thị Lan Anh'] },
	{ title: 'Tổ Sử-Địa-Giáo dục công dân: 08 giáo viên', items: ['Tổ trưởng chuyên môn: Thầy Nguyễn Văn Bé', '- Tổ phó chuyên môn: Thầy Vũ Văn Quyết'] },
	{ title: 'Tổ Tin học-Kỹ thuật công nghiệp: 06 giáo viên', items: ['Tổ trưởng chuyên môn: Thầy Lê Kỳ Nhân'] },
	{ title: 'Tổ Giáo dục thể chất-Quốc phòng an ninh: 06 giáo viên', items: ['Tổ trưởng chuyên môn: Thầy Nguyễn Văn Của', 'Tổ phó chuyên môn: Thầy Phạm Việt Diệp'] },
	{ title: 'Tổ Hành chính', items: ['Tổ trưởng: Cô Nguyễn Thị Bích Liên', 'Tổ phó: Thầy Phạm Văn Tiến'] },
]

const TeachersSection = () => {
	return (
		<div className="grid grid-cols-3 gap-5">
			{sections.map(section => <motion.div className="space-y-3 p-4 bg-white shadow-md border rounded-2xl" key={section.title} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}>
				<div className="text-2xl font-semibold text-center">{section.title}</div>
				{section.items.map(item => {
					const [label, text] = item.split(':')
					return <div key={item} className="text-sm"><span className="font-medium">{label}</span> <span className="underline decoration-pink-500">{text}</span></div>
				})}
			</motion.div>)}
		</div>
	);
};

export default TeachersSection;
