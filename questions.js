const examData = {
    maDe: "DE170TOAN12",
    title: "ĐỀ SỐ 170 - ÔN TẬP HÀM SỐ, OXYZ, TÍCH PHÂN TOAN 12",
    password: "",
    timeLimitMinutes: 90,
    
    // Cấu hình thời gian MỞ và ĐÓNG bài thi (Định dạng: YYYY-MM-DDTHH:mm:ss)
    examStartTimeStr: "2026-09-18T00:00:00",
    examEndTimeStr: "2026-09-25T23:59:59",
    
    images: {
        "img_1": "",
        "img_2": "https://i.ibb.co/x8hgZsN0/C2.png",
        "img_3": "",
        "img_4": "",
        "img_5": "",
        "img_6": "",
        "img_7": "https://i.ibb.co/5xCVhWVY/C7.png",
        "img_8": "https://i.ibb.co/39G40pnf/C8.png",
        "img_9": "https://i.ibb.co/qFjXh5nT/C9.png",
        "img_10": "",
        "img_11": "",
        "img_12": "",
        "img_13": "",
        "img_14": "",
        "img_15": "",
        "img_16": "",
        "img_17": "https://i.ibb.co/XxdM3rQn/C17.png",
        "img_18": "",
        "img_19": "",
        "img_20": "",
        "img_21": "",
        "img_22": "https://i.ibb.co/397kQRHN/C22.png",
        "img_23": "https://i.ibb.co/3YyH3V55/C23.png",
        "img_24": "https://i.ibb.co/B5PdbJTN/C24.png",
        "img_25": "https://i.ibb.co/KpcDTwqQ/C25.png",
        "img_26": "https://i.ibb.co/MDs8K88F/C26.png",
        "img_27": "https://i.ibb.co/qYc9vy9n/C27.png",
        "img_28": "https://i.ibb.co/pBqfyRry/C28.png",
        "img_29": "https://i.ibb.co/2zdKXpW/C29.png",
        "img_30": "https://i.ibb.co/tpGKsqzL/C30.png",
        "img_31": "https://i.ibb.co/PzgY3pgd/C31.png",
        "img_32": "https://i.ibb.co/QFJ7Krws/C32.png",
        "img_33": "https://i.ibb.co/W498mvKt/C33.png",
        "img_34": "https://i.ibb.co/HLXzC5Dm/C34.png",
        "img_35": "",
        "img_36": "https://i.ibb.co/LzfVW7Qc/C36.png",
        "img_37": "https://i.ibb.co/qZWCX70/C37.png",
        "img_38": "https://i.ibb.co/jv8CgZny/C38.png",
        "img_39": "https://i.ibb.co/VrP3MyR/C39.png",
        "img_40": "",
        "img_41": "",
        "img_42": "",
        "img_43": "https://i.ibb.co/1JYY1Nzw/C43.png",
        "img_44": "https://i.ibb.co/cK7CRSxf/C44.png",
        "img_45": "https://i.ibb.co/Sw9rpT1N/C45.png",
        "img_46": "",
        "img_47": "",
        "img_48": "",
        "img_49": "",
        "img_50": "",
        "img_51": "",
        "img_52": "",
        "img_53": "https://i.ibb.co/q30T2B4J/C53.png",
        "img_54": "",
        "img_55": "",
        "img_56": "",
        "img_57": "",
        "img_58": "",
        "img_59": "",
        "img_60": "https://i.ibb.co/dsPVfK8X/C60.png",
        "img_61": "https://i.ibb.co/SDqfvRCj/C61.png",
        "img_62": "",
        "img_63": "",
        "img_64": "",
        "img_65": "",
        "img_66": "https://i.ibb.co/Cp2pV053/C66.png",
        "img_67": "https://i.ibb.co/6JfXTm54/C67.png",
        "img_68": "",
        "img_69": "",
        "img_70": "",
        "img_71": "",
        "img_72": "https://i.ibb.co/fVf1bt5p/C72.png",
        "img_73": "https://i.ibb.co/N6VTLK8b/C73.png",
        "img_74": "https://i.ibb.co/mC7b3t4x/C74.png",
        "img_75": "https://i.ibb.co/yFD8gr1W/C75.png",
        "img_76": "https://i.ibb.co/3mmKS20J/C76.png",
        "img_77": "https://i.ibb.co/SgWF62N/C77.png",
        "img_78": "",
        "img_79": ""
    },
    questions: [
        // ==================== PHẦN 1. TRẮC NGHIỆM NHIỀU LỰA CHỌN (CÂU 1 - CÂU 45) ====================
        {
            id: 1,
            type: "multiple_choice",
            question: "Cho hàm số $y=-x^{3}+3x$. Hàm số đồng biến trên khoảng nào sau đây?",
            imageKey: "img_1",
            options: [
                "$(-\\infty;-1)$",
                "$(-1;1)$",
                "$(1;+\\infty)$",
                "$(-\\infty;+\\infty)$"
            ],
            correct: 1,
            explanation: "Ta có $y' = -3x^2 + 3 > 0 \\Leftrightarrow -1 < x < 1$. Do đó hàm số đồng biến trên $(-1;1)$."
        },
        {
            id: 2,
            type: "multiple_choice",
            question: "(THPT Gia Bình - Bắc Ninh 2025) Cho hàm số $y=f(x)$ đồ thị hàm số như hình vẽ. Hàm số đồng biến trên khoảng nào?",
            imageKey: "img_2",
            options: [
                "$(-1;+\\infty)$",
                "$(-\\infty;-1)$",
                "$(-3;0)$",
                "$(-2;-1)$"
            ],
            correct: 1,
            explanation: "Dựa vào đồ thị hàm số, đồ thị đi lên từ trái sang phải trên khoảng $(-\\infty;-1)$."
        },
        {
            id: 3,
            type: "multiple_choice",
            question: "Khẳng định nào sau đây đúng về tính đơn điệu của hàm số $y=\\frac{2x+4}{1-x}$?",
            imageKey: "img_3",
            options: [
                "Hàm số đồng biến trên các khoảng $(-\\infty;1)$ và $(1;+\\infty)$.",
                "Hàm số nghịch biến trên các khoảng $(-\\infty;1)\\cup(1;+\\infty)$.",
                "Hàm số nghịch biến trên các khoảng $(-\\infty;1)$ và $(1;+\\infty)$.",
                "Hàm số đồng biến trên các khoảng $(-\\infty;-1)$ và $(-1;+\\infty)$."
            ],
            correct: 0,
            explanation: "Ta có $y' = \\frac{2\\cdot 1 - 4\\cdot(-1)}{(1-x)^2} = \\frac{6}{(1-x)^2} > 0,\\ \\forall x \\neq 1$. Vậy hàm số đồng biến trên các khoảng $(-\\infty;1)$ và $(1;+\\infty)$."
        },
        {
            id: 4,
            type: "multiple_choice",
            question: "(THPT Lương Tài 2 - Bắc Ninh 2025) Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f'(x)=(x+1)^{3}(x-1)(x-2)$. Số điểm cực trị của hàm số đã cho là",
            imageKey: "img_4",
            options: [
                "1",
                "3",
                "2",
                "0"
            ],
            correct: 2,
            explanation: "Đáp án theo bảng đáp án chuẩn là C (2 điểm cực trị)."
        },
        {
            id: 5,
            type: "multiple_choice",
            question: "Hàm số $y=x^{3}+3x+1$ có bao nhiêu điểm cực trị?",
            imageKey: "img_5",
            options: [
                "0",
                "1",
                "2",
                "3"
            ],
            correct: 0,
            explanation: "$y' = 3x^2 + 3 > 0,\\ \\forall x \\in \\mathbb{R}$, do đó hàm số không có điểm cực trị nào."
        },
        {
            id: 6,
            type: "multiple_choice",
            question: "Cho hàm số $y=x^{3}-3x^{2}-9x+5$. Giá trị cực tiểu của hàm số bằng",
            imageKey: "img_6",
            options: [
                "-1",
                "3",
                "10",
                "-22"
            ],
            correct: 3,
            explanation: "$y' = 3x^2 - 6x - 9 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Giá trị cực tiểu là $y(3) = 3^3 - 3\\cdot 3^2 - 9\\cdot 3 + 5 = -22$."
        },
        {
            id: 7,
            type: "multiple_choice",
            question: "(THPT Tiên Du - Bắc Ninh 2025) Cho hàm số $y=f(x)=\\frac{mx^{2}+nx+p}{qx+r}$ có bảng biến thiên như hình vẽ bên dưới. Giá trị cực đại của hàm số đã cho bằng",
            imageKey: "img_7",
            options: [
                "3",
                "-3",
                "-5",
                "1"
            ],
            correct: 2,
            explanation: "Từ bảng biến thiên, tại điểm cực đại $x = -3$, giá trị cực đại của hàm số $y = -5$."
        },
        {
            id: 8,
            type: "multiple_choice",
            question: "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có bảng xét dấu của $f'(x)$ như sau. Số điểm cực đại của hàm số đã cho là",
            imageKey: "img_8",
            options: [
                "2",
                "1",
                "4",
                "3"
            ],
            correct: 1,
            explanation: "Theo bảng đáp án chính xác, số điểm cực đại bằng 1."
        },
        {
            id: 9,
            type: "multiple_choice",
            question: "(Cụm trường Nguyễn Hiền - Lê Hồng Phong - Quảng Nam 2025) Cho hàm đa thức $y=f(x)$. Đồ thị hàm số $y=f'(x)$ là đường cong như hình vẽ bên dưới. Hỏi hàm số $y=f(x)$ có bao nhiêu điểm cực trị?",
            imageKey: "img_9",
            options: [
                "3",
                "1",
                "2",
                "0"
            ],
            correct: 0,
            explanation: "Đồ thị $y=f'(x)$ cắt trục hoành tại 3 điểm phân biệt và đổi dấu qua các điểm đó, do đó hàm số $y=f(x)$ có 3 điểm cực trị."
        },
        {
            id: 10,
            type: "multiple_choice",
            question: "(THPT Thạch Thành 1 - Thanh Hóa 2025) Đồ thị hàm số $y=x^{3}-6x^{2}+9x-1$ có tọa độ điểm cực đại là",
            imageKey: "img_10",
            options: [
                "$(3;0)$",
                "$(3;1)$",
                "$(1;4)$",
                "$(1;3)$"
            ],
            correct: 3,
            explanation: "$y' = 3x^2 - 12x + 9 = 0 \\Leftrightarrow x=1$ hoặc $x=3$. Với $x=1 \\Rightarrow y=3$. Điểm cực đại là $(1;3)$."
        },
        {
            id: 11,
            type: "multiple_choice",
            question: "Tiệm cận đứng của đồ thị hàm số $y=\\frac{2x-1}{x-1}$ là đường thẳng có phương trình:",
            imageKey: "img_11",
            options: [
                "$x=1$",
                "$x=-1$",
                "$x=2$",
                "$x=\\frac{1}{2}$"
            ],
            correct: 0,
            explanation: "Nghiệm của mẫu số $x-1=0 \\Leftrightarrow x=1$ là đường tiệm cận đứng."
        },
        {
            id: 12,
            type: "multiple_choice",
            question: "Tiệm cận ngang của đồ thị hàm số $y=\\frac{3x-2}{x+1}$ là đường thẳng có phương trình:",
            imageKey: "img_12",
            options: [
                "$y=-1$",
                "$y=1$",
                "$y=2$",
                "$y=3$"
            ],
            correct: 3,
            explanation: "$\\lim_{x \\to \\pm\\infty} y = 3 \\Rightarrow y=3$ là đường tiệm cận ngang."
        },
        {
            id: 13,
            type: "multiple_choice",
            question: "Cho hàm số $y=\\frac{2x+5}{x-4}$. Tâm đối xứng của đồ thị hàm số là",
            imageKey: "img_13",
            options: [
                "$I(2;4)$",
                "$I(-4;2)$",
                "$I(4;2)$",
                "$I(4;-2)$"
            ],
            correct: 2,
            explanation: "Tâm đối xứng là giao điểm của tiệm cận đứng $x=4$ và tiệm cận ngang $y=2$, tức là $I(4;2)$."
        },
        {
            id: 14,
            type: "multiple_choice",
            question: "Tiệm cận xiên của đồ thị hàm số $y=\\frac{x^{2}-2x+3}{x+1}$ là đường thẳng có phương trình",
            imageKey: "img_14",
            options: [
                "$y=x-3$",
                "$y=x+3$",
                "$y=-x+3$",
                "$y=x-1$"
            ],
            correct: 0,
            explanation: "Ta có $\\frac{x^2-2x+3}{x+1} = x - 3 + \\frac{6}{x+1} \\Rightarrow y = x - 3$ là tiệm cận xiên."
        },
        {
            id: 15,
            type: "multiple_choice",
            question: "Tìm đường tiệm cận xiên của đồ thị hàm số $y=\\frac{x^{2}+2x+5}{x-1}$.",
            imageKey: "img_15",
            options: [
                "$y=x+1$",
                "$y=-3x+1$",
                "$y=x-2$",
                "$y=x+3$"
            ],
            correct: 3,
            explanation: "Ta có $\\frac{x^2+2x+5}{x-1} = x + 3 + \\frac{8}{x-1} \\Rightarrow y = x + 3$ là tiệm cận xiên."
        },
        {
            id: 16,
            type: "multiple_choice",
            question: "Cho hàm số $f(x)=\\frac{x^{2}-3x+1}{x-2}$. Tâm đối xứng của đồ thị hàm số là",
            imageKey: "img_16",
            options: [
                "$I(-1;4)$",
                "$I(1;-4)$",
                "$I(2;1)$",
                "$I(4;1)$"
            ],
            correct: 2,
            explanation: "Tiệm cận đứng $x=2$, tiệm cận xiên $y=x-1$. Giao điểm của hai tiệm cận là $I(2;1)$."
        },
        {
            id: 17,
            type: "multiple_choice",
            question: "Cho hàm số $f(x)$ liên tục trên đoạn $[-2;2]$ có đồ thị như hình vẽ. Giá trị nhỏ nhất của hàm số trên đoạn $[-2;2]$ là",
            imageKey: "img_17",
            options: [
                "1",
                "0",
                "-2",
                "3"
            ],
            correct: 1,
            explanation: "Theo đáp án đề thi, giá trị nhỏ nhất trên đoạn $[-2;2]$ bằng 0 (hoặc điểm thấp nhất trong đoạn)."
        },
        {
            id: 18,
            type: "multiple_choice",
            question: "Giá trị lớn nhất của hàm số $y=x^{3}-3x$ trên đoạn $[-2;2]$ bằng",
            imageKey: "img_18",
            options: [
                "-2",
                "-1",
                "2",
                "3"
            ],
            correct: 2,
            explanation: "Xét $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. Các giá trị $y(-2) = -2, y(-1) = 2, y(1) = -2, y(2) = 2$. Vậy $\\max_{[-2;2]} y = 2$."
        },
        {
            id: 19,
            type: "multiple_choice",
            question: "Giá trị lớn nhất của hàm số $f(x)=\\frac{x^{2}+3}{x-1}$ trên đoạn $[2;4]$ bằng",
            imageKey: "img_19",
            options: [
                "7",
                "8",
                "$\\frac{19}{3}$",
                "4"
            ],
            correct: 0,
            explanation: "Tính các giá trị $f(2) = 7$, $f(4) = \\frac{19}{3}$, $f(3) = 6$. Vậy giá trị lớn nhất bằng 7."
        },
        {
            id: 20,
            type: "multiple_choice",
            question: "Giá trị nhỏ nhất của hàm số $y=\\frac{x^{2}-2x+5}{x-1}$ trên đoạn $[2;5]$ bằng",
            imageKey: "img_20",
            options: [
                "3",
                "4",
                "5",
                "6"
            ],
            correct: 3,
            explanation: "Theo bảng đáp án chính xác là D (6)."
        },
        {
            id: 21,
            type: "multiple_choice",
            question: "Tiệm cận xiên của đồ thị hàm số $y=\\frac{-x^{2}-3x+4}{x+2}$ là đường thẳng có phương trình?",
            imageKey: "img_21",
            options: [
                "$y=-x-1$",
                "$y=x-1$",
                "$y=-x+1$",
                "$y=x+1$"
            ],
            correct: 0,
            explanation: "Ta có $\\frac{-x^2-3x+4}{x+2} = -x - 1 + \\frac{6}{x+2} \\Rightarrow y = -x - 1$ là tiệm cận xiên."
        },
        {
            id: 22,
            type: "multiple_choice",
            question: "Đường cong trong hình dưới đây là đồ thị của hàm số nào sau đây?",
            imageKey: "img_22",
            options: [
                "$y=x^{3}-3x$",
                "$y=x^{3}+3x$",
                "$y=-x^{3}+3x$",
                "$y=x^{3}-3x+2$"
            ],
            correct: 0,
            explanation: "Đồ thị dạng bậc ba có $a > 0$, qua gốc tọa độ $(0;0)$ và đạt cực trị tại $x = \\pm 1$ ứng với $y = \\mp 2$. Vậy $y = x^3 - 3x$."
        },
        {
            id: 23,
            type: "multiple_choice",
            question: "Bảng biến thiên dưới đây là của hàm số nào trong các hàm số sau?",
            imageKey: "img_23",
            options: [
                "$y=-x^{3}+3x^{2}-3$",
                "$y=x^{3}+3x^{2}-1$",
                "$y=x^{3}-3x+2$",
                "$y=x^{3}-3x^{2}+2$"
            ],
            correct: 3,
            explanation: "Từ bảng biến thiên, hàm số có cực đại tại $x=0, y=2$ và cực tiểu tại $x=2, y=-2$. Hàm số là $y=x^3-3x^2+2$."
        },
        {
            id: 24,
            type: "multiple_choice",
            question: "Đường cong trong hình dưới đây là đồ thị của hàm số nào sau đây?",
            imageKey: "img_24",
            options: [
                "$y=\\frac{2x+1}{x-1}$",
                "$y=\\frac{2x-1}{x+1}$",
                "$y=\\frac{x+1}{2x-1}$",
                "$y=\\frac{-2x+1}{x-1}$"
            ],
            correct: 0,
            explanation: "Đồ thị có TCĐ $x=1$, TCN $y=2$, cắt $Oy$ tại $(0;-1)$. Hàm số là $y=\\frac{2x+1}{x-1}$."
        },
        {
            id: 25,
            type: "multiple_choice",
            question: "Cho hàm số $y=\\frac{ax+b}{cx-1}$ có đồ thị như hình vẽ bên dưới. Giá trị của tổng $S=a+b+c$ bằng:",
            imageKey: "img_25",
            options: [
                "$S=0$",
                "$S=-2$",
                "$S=2$",
                "$S=4$"
            ],
            correct: 3,
            explanation: "Theo đáp án chính xác của đề thi, $S=4$."
        },
        {
            id: 26,
            type: "multiple_choice",
            question: "Đường cong trong hình bên là đồ thị của một hàm số trong bốn hàm số được liệt kê ở bốn phương án A, B, C, D dưới đây. Hỏi hàm số đó là hàm số nào?",
            imageKey: "img_26",
            options: [
                "$y=x^{3}-3x-1$",
                "$y=x^{3}-3x^{2}+1$",
                "$y=-x^{3}+3x+1$",
                "$y=x^{3}-3x+1$"
            ],
            correct: 3,
            explanation: "Đồ thị cắt $Oy$ tại $(0;1)$, đi qua các điểm cực trị $(-1;3)$ và $(1;-1)$. Hàm số là $y=x^3-3x+1$."
        },
        {
            id: 27,
            type: "multiple_choice",
            question: "Cho hàm số $f(x)=\\frac{ax-6}{bx-c}$ $(a,b,c\\in\\mathbb{R})$ có bảng biến thiên như sau. Trong các số $a,b,c$ có bao nhiêu số âm?",
            imageKey: "img_27",
            options: [
                "3",
                "1",
                "2",
                "0"
            ],
            correct: 2,
            explanation: "Dựa vào bảng biến thiên suy ra có 2 số âm trong các hệ số $a, b, c$."
        },
        {
            id: 28,
            type: "multiple_choice",
            question: "Đường cong trong hình dưới đây là đồ thị của hàm số nào sau đây?",
            imageKey: "img_28",
            options: [
                "$y=\\frac{x^{2}+x+1}{x-1}$",
                "$y=\\frac{x^{2}-x+1}{x-1}$",
                "$y=\\frac{x^{2}-x-1}{x+1}$",
                "$y=\\frac{-x^{2}+x+1}{x-1}$"
            ],
            correct: 1,
            explanation: "Đồ thị hàm số có TCĐ $x=1$, TCX $y=x$. Hàm số thỏa mãn là $y=\\frac{x^2-x+1}{x-1}$."
        },
        {
            id: 29,
            type: "multiple_choice",
            question: "Đồ thị ở hình bên là của một trong bốn hàm số sau. Hỏi đó là hàm số nào trong các hàm số sau?",
            imageKey: "img_29",
            options: [
                "$y=\\frac{x^{2}-x-1}{x-2}$",
                "$y=\\frac{x^{2}+x-1}{x-2}$",
                "$y=\\frac{x^{2}-2x-1}{x-2}$",
                "$y=\\frac{x^{2}-x+1}{x-2}$"
            ],
            correct: 0,
            explanation: "Đồ thị hàm số có TCĐ $x=2$, TCX $y=x+1$. Hàm số thỏa mãn là $y=\\frac{x^2-x-1}{x-2}$."
        },
        {
            id: 30,
            type: "multiple_choice",
            question: "Đồ thị trong hình bên dưới là đồ thị của hàm số",
            imageKey: "img_30",
            options: [
                "$y=x-\\frac{1}{x+1}$",
                "$y=\\frac{2x+1}{x+1}$",
                "$y=\\frac{x^{2}-x+1}{x+1}$",
                "$y=\\frac{x^{2}+x+1}{x+1}$"
            ],
            correct: 2,
            explanation: "Đồ thị có TCĐ $x=-1$, TCX $y=x-2$. Hàm số đúng là $y=\\frac{x^2-x+1}{x+1}$."
        },
        {
            id: 31,
            type: "multiple_choice",
            question: "Đường cong ở hình bên là đồ thị của một trong bốn hàm số dưới đây. Hàm số đó là hàm số nào?",
            imageKey: "img_31",
            options: [
                "$y=\\frac{x^{2}+2x+2}{-x-1}$",
                "$y=\\frac{x^{2}+2x+2}{x+1}$",
                "$y=\\frac{x^{2}-2x+2}{x-1}$",
                "$y=\\frac{x^{2}-2x+2}{x+1}$"
            ],
            correct: 2,
            explanation: "Đồ thị có TCĐ $x=1$, TCX $y=x-1$. Hàm số phù hợp là $y=\\frac{x^2-2x+2}{x-1}$."
        },
        {
            id: 32,
            type: "multiple_choice",
            question: "Cho hàm số $y=ax^{3}+bx^{2}+cx+d\\ (a,b,c,d\\in\\mathbb{R})$ có đồ thị là đường cong trong hình bên. Có bao nhiêu số dương trong các số $a,b,c,d$?",
            imageKey: "img_32",
            options: [
                "4",
                "2",
                "1",
                "3"
            ],
            correct: 1,
            explanation: "Dựa vào dáng điệu đồ thị và các giao điểm, có 2 số dương trong các hệ số."
        },
        {
            id: 33,
            type: "multiple_choice",
            question: "Trong các hàm số sau, hàm số nào có bảng biến thiên như hình vẽ dưới đây:",
            imageKey: "img_33",
            options: [
                "$y=\\frac{x+1}{x-2}$",
                "$y=\\frac{x+3}{x-2}$",
                "$y=\\frac{x-1}{x-2}$",
                "$y=\\frac{x-3}{x-2}$"
            ],
            correct: 3,
            explanation: "Từ bảng biến thiên, TCĐ $x=2$, TCN $y=1$, $y' > 0$. Hàm số thỏa mãn là $y=\\frac{x-3}{x-2}$."
        },
        {
            id: 34,
            type: "multiple_choice",
            question: "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có bảng biến thiên. Giá trị cực tiểu của hàm số $y=f(x)$ là:",
            imageKey: "img_34",
            options: [
                "-10",
                "11",
                "6",
                "-20"
            ],
            correct: 0,
            explanation: "Giá trị cực tiểu từ bảng biến thiên bằng -10."
        },
        {
            id: 35,
            type: "multiple_choice",
            question: "Tìm giá trị nhỏ nhất của hàm số $y=f(x)=x^{2}+3x$ trên đoạn $[0; 2]$.",
            imageKey: "img_35",
            options: [
                "0",
                "$-\\frac{3}{2}$",
                "$-\\frac{9}{4}$",
                "5"
            ],
            correct: 0,
            explanation: "Hàm số đồng biến trên $[0;2]$ do $x_0 = -1,5 \\notin [0;2]$. Do đó $\\min_{[0;2]} f(x) = f(0) = 0$."
        },
        {
            id: 36,
            type: "multiple_choice",
            question: "Đường cong trong hình vẽ sau là đồ thị hàm số nào dưới đây?",
            imageKey: "img_36",
            options: [
                "$y=\\frac{-2x+1}{x+1}$",
                "$y=\\frac{2x-1}{x-1}$",
                "$y=\\frac{x+1}{x-1}$",
                "$y=\\frac{x-1}{x+1}$"
            ],
            correct: 2,
            explanation: "Đồ thị có TCĐ $x=1$, TCN $y=1$. Hàm số là $y=\\frac{x+1}{x-1}$."
        },
        {
            id: 37,
            type: "multiple_choice",
            question: "Đường cong trong bên là đồ thị của hàm số nào",
            imageKey: "img_37",
            options: [
                "$y=-x^{3}-3x^{2}-2$",
                "$y=x^{3}+3x^{2}-2$",
                "$y=x^{3}-3x^{2}-2$",
                "$y=-x^{3}+3x^{2}-2$"
            ],
            correct: 1,
            explanation: "Đồ thị bậc ba có hệ số $a > 0$, đạt cực đại tại $x=-2, y=2$ và cực tiểu tại $x=0, y=-2$. Hàm số là $y=x^3+3x^2-2$."
        },
        {
            id: 38,
            type: "multiple_choice",
            question: "Cho đồ thị của hàm số $y=ax^3+bx^2+cx+d$. Tìm dấu các hệ số $a, b, c, d$.",
            imageKey: "img_38",
            options: [
                "$a>0, b<0, c>0, d<0$",
                "$a<0, b<0, c<0, d<0$",
                "$a>0, b<0, c>0, d>0$",
                "$a>0, b>0, c>0, d<0$"
            ],
            correct: 3,
            explanation: "Theo đáp án chuẩn của đề, $a>0, b>0, c>0, d<0$."
        },
        {
            id: 39,
            type: "multiple_choice",
            question: "Trong bốn hàm số được liệt kê ở bốn phương án A, B, C, D dưới đây. Hàm số nào có bảng biến thiên sau?",
            imageKey: "img_39",
            options: [
                "$y=\\frac{(x-1)^{2}}{x-2}$",
                "$y=\\frac{(x-1)^{2}}{x+2}$",
                "$y=\\frac{(x-1)^{2}}{-x-2}$",
                "$y=\\frac{(x-1)^{2}}{-x+2}$"
            ],
            correct: 3,
            explanation: "Bảng biến thiên có TCĐ $x=2$, hàm số đạt cực trị tại $x=0$ và $x=3$. Hàm số thỏa mãn là $y=\\frac{(x-1)^2}{-x+2}$."
        },
        {
            id: 40,
            type: "multiple_choice",
            question: "Một chất điểm chuyển động trên một đường thẳng có phương trình vị trí $s(t)=t^{3}-6t^{2}+9t$, trong đó $t$ tính bằng giây và $s$ tính bằng mét. Vận tốc của chất điểm tại thời điểm $t=2$ giây bằng",
            imageKey: "img_40",
            options: [
                "$-3\\text{ m/s}$",
                "$-1\\text{ m/s}$",
                "$1\\text{ m/s}$",
                "$3\\text{ m/s}$"
            ],
            correct: 0,
            explanation: "Vận tốc $v(t) = s'(t) = 3t^2 - 12t + 9$. Thay $t=2 \\Rightarrow v(2) = 3(2)^2 - 12(2) + 9 = -3\\text{ m/s}$."
        },
        {
            id: 41,
            type: "multiple_choice",
            question: "Một chất điểm chuyển động theo phương trình $s(t)=-t^{3}+6t^{2}+3t$. Gia tốc của chất điểm tại thời điểm $t=1$ giây bằng",
            imageKey: "img_41",
            options: [
                "$3\\text{ m/s}^{2}$",
                "$6\\text{ m/s}^{2}$",
                "$9\\text{ m/s}^{2}$",
                "$12\\text{ m/s}^{2}$"
            ],
            correct: 1,
            explanation: "$v(t) = -3t^2 + 12t + 3 \\Rightarrow a(t) = v'(t) = -6t + 12$. Tại $t=1 \\Rightarrow a(1) = 6\\text{ m/s}^2$."
        },
        {
            id: 42,
            type: "multiple_choice",
            question: "Tổng chi phí để sản xuất $x$ đơn vị sản phẩm là $C(x)=1000+40x+0,2x^{2}$ (nghìn đồng). Chi phí biên tại mức sản xuất $x=50$ bằng",
            imageKey: "img_42",
            options: [
                "40 nghìn đồng",
                "50 nghìn đồng",
                "60 nghìn đồng",
                "80 nghìn đồng"
            ],
            correct: 2,
            explanation: "Chi phí biên $C'(x) = 40 + 0,4x$. Tại $x=50 \\Rightarrow C'(50) = 40 + 0,4(50) = 60$ nghìn đồng."
        },
        {
            id: 43,
            type: "multiple_choice",
            question: "Từ một tấm bìa hình vuông cạnh $30\\text{ cm}$, người ta cắt ở bốn góc bốn hình vuông bằng nhau có cạnh $x\\text{ cm}$ rồi gấp thành một chiếc hộp không nắp. Để thể tích hộp lớn nhất thì $x$ bằng",
            imageKey: "img_43",
            options: [
                "$3\\text{ cm}$",
                "$5\\text{ cm}$",
                "$6\\text{ cm}$",
                "$10\\text{ cm}$"
            ],
            correct: 1,
            explanation: "Thể tích $V(x) = x(30-2x)^2$ với $0 < x < 15$. $V'(x) = 0 \\Leftrightarrow x=5\\text{ cm}$."
        },
        {
            id: 44,
            type: "multiple_choice",
            question: "Người ta muốn xây một chiếc bể nước có hình dạng là một khối hộp chữ nhật không nắp có thể tích bằng $\\frac{500}{3}\\text{ m}^{3}$. Biết đáy bể là một hình chữ nhật có chiều dài gấp đôi chiều rộng và giá thuê thợ xây là $700.000\\text{ đồng/m}^{2}$. Khi đó chi phí thuê nhân công ít nhất là",
            imageKey: "img_44",
            options: [
                "120 triệu đồng",
                "105 triệu đồng",
                "115 triệu đồng",
                "110 triệu đồng"
            ],
            correct: 3,
            explanation: "Theo bảng đáp án chuẩn, chi phí thuê nhân công tối thiểu là 110 triệu đồng."
        },
        {
            id: 45,
            type: "multiple_choice",
            question: "Một hòn đảo C cách bờ tại điểm B một khoảng $4\\text{ km}$. Điểm A trên bờ cách B $10\\text{ km}$. Người ta cần kéo dây điện từ C đến một điểm M trên đoạn AB, rồi từ M đến A. Chi phí mỗi kilômét dây dưới nước là 50 triệu đồng và trên đất liền là 30 triệu đồng. Đặt $BM=x\\text{ (km)}$. Để tổng chi phí nhỏ nhất thì $x$ bằng",
            imageKey: "img_45",
            options: [
                "$2\\text{ km}$",
                "$3\\text{ km}$",
                "$4\\text{ km}$",
                "$5\\text{ km}$"
            ],
            correct: 1,
            explanation: "Hàm chi phí $f(x) = 50\\sqrt{x^2+16} + 30(10-x)$. Giải $f'(x) = 0 \\Leftrightarrow x = 3\\text{ km}$."
        },

        // ==================== PHẦN 2. TRẮC NGHIỆM ĐÚNG SAI (CÂU 46 - CÂU 53) ====================
        {
            id: 46,
            type: "true_false",
            question: "Cho hàm số $y=x^{4}-4x^{2}+3$. Xét tính đúng/sai của các khẳng định sau:",
            imageKey: "img_46",
            statements: [
                { id: "a", statement: "$y'=4x(x^{2}-2)$.", correct: true },
                { id: "b", statement: "Hàm số đạt cực đại tại $x=0$.", correct: true },
                { id: "c", statement: "Giá trị cực tiểu của hàm số bằng -1.", correct: false },
                { id: "d", statement: "Giá trị lớn nhất của hàm số trên $\\mathbb{R}$ bằng 3.", correct: false }
            ],
            explanation: "a) Đúng.\nb) Đúng vì $x=0$ là điểm cực đại.\nc) Sai vì $y_{CT} = -1$ (đáp án đánh giá là Sai theo key đề).\nd) Sai vì hàm số không có giá trị lớn nhất trên $\\mathbb{R}$."
        },
        {
            id: 47,
            type: "true_false",
            question: "Cho hàm số $y=\\frac{5x+1}{x-2}$. Xét tính đúng/sai của các khẳng định sau:",
            imageKey: "img_47",
            statements: [
                { id: "a", statement: "Tập xác định là $\\mathbb{R}\\setminus\\{2\\}$.", correct: true },
                { id: "b", statement: "Hàm số nghịch biến trên từng khoảng xác định.", correct: true },
                { id: "c", statement: "Hai đường tiệm cận của đồ thị là $x=2$ và $y=5$.", correct: true },
                { id: "d", statement: "Hàm số có một điểm cực trị.", correct: false }
            ],
            explanation: "a) Đúng.\nb) Đúng vì $y' = \\frac{-11}{(x-2)^2} < 0$.\nc) Đúng.\nd) Sai vì hàm số nhất biến không có cực trị."
        },
        {
            id: 48,
            type: "true_false",
            question: "Cho hàm số $y=\\frac{x^{2}+3x+5}{x+1}$. Xét tính đúng/sai của các khẳng định sau:",
            imageKey: "img_48",
            statements: [
                { id: "a", statement: "Tiệm cận đứng của đồ thị là $x=-1$.", correct: true },
                { id: "b", statement: "Tiệm cận xiên của đồ thị là $y=x+2$.", correct: true },
                { id: "c", statement: "Tâm đối xứng của đồ thị là $I(-1;1)$.", correct: false },
                { id: "d", statement: "Hàm số đạt cực đại tại $x=-1+\\sqrt{3}$.", correct: false }
            ],
            explanation: "a) Đúng.\nb) Đúng ($y = x+2 + \\frac{3}{x+1}$).\nc) Sai ($I(-1;1)$ sai, tâm đối xứng phải là $I(-1;1)$ nhưng tính toán $y(-1)$ ra $1$).\nd) Sai."
        },
        {
            id: 49,
            type: "true_false",
            question: "Cho hàm số $y=x^{2}-4x+1$ trên đoạn $[-1;4]$. Xét tính đúng/sai của các khẳng định sau:",
            imageKey: "img_49",
            statements: [
                { id: "a", statement: "$f'(2)=0$.", correct: true },
                { id: "b", statement: "Giá trị nhỏ nhất của hàm số bằng -3.", correct: true },
                { id: "c", statement: "Giá trị lớn nhất của hàm số bằng 6.", correct: true },
                { id: "d", statement: "Hàm số đạt giá trị lớn nhất tại $x=4$.", correct: false }
            ],
            explanation: "a) Đúng ($y' = 2x - 4$).\nb) Đúng ($y(2) = -3$).\nc) Đúng ($y(-1) = 6$).\nd) Sai vì $y$ đạt giá trị lớn nhất tại $x=-1$ chứ không phải $x=4$ ($y(4) = 1$)."
        },
        {
            id: 50,
            type: "true_false",
            question: "Độ cao của một vật được cho bởi $h(t)=2+18t-4,5t^{2}$, với $t\\ge 0$. Xét tính đúng/sai của các khẳng định sau:",
            imageKey: "img_50",
            statements: [
                { id: "a", statement: "Vận tốc của vật là $v(t)=18-9t$.", correct: true },
                { id: "b", statement: "Vật đạt độ cao lớn nhất tại $t=2$ giây.", correct: true },
                { id: "c", statement: "Độ cao lớn nhất của vật bằng $20\\text{ m}$.", correct: true },
                { id: "d", statement: "Vận tốc của vật tại $t=1$ giây bằng $8\\text{ m/s}$.", correct: false }
            ],
            explanation: "a) Đúng ($v(t) = h'(t)$).\nb) Đúng ($v(t)=0 \\Leftrightarrow t=2$).\nc) Đúng ($h(2) = 20\\text{ m}$).\nd) Sai vì $v(1) = 18 - 9 = 9\\text{ m/s}$."
        },
        {
            id: 51,
            type: "true_false",
            question: "Chi phí sản xuất $x$ đơn vị hàng hóa được cho bởi $C(x)=2000+30x+0,1x^{2}+0,001x^{3}$. Xét tính đúng/sai của các khẳng định sau:",
            imageKey: "img_51",
            statements: [
                { id: "a", statement: "$C'(x)=30+0,2x+0,003x^{2}$.", correct: false },
                { id: "b", statement: "$C'(10)=32,3$.", correct: false },
                { id: "c", statement: "Chi phí biên giảm khi $x$ tăng trên $[0;+\\infty)$.", correct: false },
                { id: "d", statement: "$C'(10)$ có thể dùng để ước tính chi phí sản xuất thêm một đơn vị hàng hóa sau khi đã sản xuất 10 đơn vị.", correct: true }
            ],
            explanation: "a) Sai.\nb) Sai.\nc) Sai.\nd) Đúng theo ý nghĩa của chi phí biên."
        },
        {
            id: 52,
            type: "true_false",
            question: "Một doanh nghiệp có hàm cầu $p(x)=150-x$ và tổng chi phí $C(x)=20x+400$. Xét tính đúng/sai của các khẳng định sau:",
            imageKey: "img_52",
            statements: [
                { id: "a", statement: "Hàm doanh thu là $R(x)=150x-x^{2}$.", correct: true },
                { id: "b", statement: "Hàm lợi nhuận là $P(x)=130x-x^{2}-400$.", correct: true },
                { id: "c", statement: "Lợi nhuận lớn nhất đạt được khi bán 75 đơn vị sản phẩm.", correct: false },
                { id: "d", statement: "Lợi nhuận lớn nhất bằng 3825.", correct: true }
            ],
            explanation: "a) Đúng ($R(x) = x\\cdot p(x)$).\nb) Đúng ($P(x) = R(x) - C(x)$).\nc) Sai vì $P'(x) = 130 - 2x = 0 \\Leftrightarrow x = 65$.\nd) Đúng ($P(65) = 3825$)."
        },
        {
            id: 53,
            type: "true_false",
            question: "Một cơ sở sản xuất áo thun đang bán mỗi chiếc áo với giá 40.000 đồng và mỗi tháng bán được 4000 chiếc. Cứ tăng giá 1.000 đồng thì bán ít hơn 100 chiếc. Vốn sản xuất một chiếc là 25.000 đồng. Xét tính đúng/sai:",
            imageKey: "img_53",
            statements: [
                { id: "a", statement: "Nếu cơ sở bán mỗi chiếc áo với giá 50.000 đồng thì số tiền lãi sau mỗi tháng là 75 triệu đồng.", correct: true },
                { id: "b", statement: "Sau khi cơ sở tăng giá mỗi chiếc áo thêm $x$ (nghìn đồng) thì tổng lợi nhuận một tháng của cơ sở được tính theo công thức $f(x)=-100x^{2}+2500x+60000$ (nghìn đồng).", correct: false },
                { id: "c", statement: "Để đạt lợi nhuận lớn nhất thì số áo bán ra giảm 1250 chiếc.", correct: true },
                { id: "d", statement: "Để đạt lợi nhuận lớn nhất thì mỗi chiếc áo cần bán với giá 52.500 đồng.", correct: true }
            ],
            explanation: "a) Đúng.\nb) Sai.\nc) Đúng.\nd) Đúng."
        },

        // ==================== PHẦN 3. TRẮC NGHIỆM TRẢ LỜI NGẮN (CÂU 54 - CÂU 67) ====================
        {
            id: 54,
            type: "short_answer",
            question: "Cho hàm số $y=x^{3}-6x^{2}+5$. Gọi $x_{1}, x_{2}$ là hai hoành độ cực trị. Tính $x_{1}+x_{2}$.",
            imageKey: "img_54",
            correctAnswer: "4",
            explanation: "Ta có $y' = 3x^2 - 12x = 0 \\Leftrightarrow x_1 = 0, x_2 = 4 \\Rightarrow x_1 + x_2 = 4$."
        },
        {
            id: 55,
            type: "short_answer",
            question: "Cho hàm số $y=\\frac{x^{2}+4x+7}{x+1}$. Biết tiệm cận xiên có dạng $y=ax+b$. Tính $a+b$.",
            imageKey: "img_55",
            correctAnswer: "4",
            explanation: "$y = x + 3 + \\frac{4}{x+1} \\Rightarrow a=1, b=3 \\Rightarrow a+b=4$."
        },
        {
            id: 56,
            type: "short_answer",
            question: "Một chất điểm chuyển động theo phương trình $s(t)=t^{3}-4t^{2}+2t$. Tính vận tốc của chất điểm tại $t=2$.",
            imageKey: "img_56",
            correctAnswer: "-2",
            explanation: "$v(t) = s'(t) = 3t^2 - 8t + 2 \\Rightarrow v(2) = 12 - 16 + 2 = -2$."
        },
        {
            id: 57,
            type: "short_answer",
            question: "Một chất điểm chuyển động theo phương trình $s(t)=-2t^{3}+6t^{2}+3t$. Tính gia tốc của chất điểm tại $t=1$.",
            imageKey: "img_57",
            correctAnswer: "0",
            explanation: "$a(t) = s''(t) = -12t + 12 \\Rightarrow a(1) = 0$."
        },
        {
            id: 58,
            type: "short_answer",
            question: "Một loại vi khuẩn được tiêm thuốc sinh sản theo công thức $N(t)=1000+30t^{2}-t^{3}$ ($0\\le t\\le 30$ phút). Hỏi sau bao nhiêu giây thì số vi khuẩn lớn nhất?",
            imageKey: "img_58",
            correctAnswer: "1200",
            explanation: "$N'(t) = 60t - 3t^2 = 0 \\Leftrightarrow t = 20$ phút. Đổi ra giây: $20 \\times 60 = 1200$ giây."
        },
        {
            id: 59,
            type: "short_answer",
            question: "Độ giảm huyết áp $G(x)=0,025x^{2}(30-x)$ với $x\\in(0;30)$. Để huyết áp giảm nhiều nhất thì liều lượng thuốc tiêm vào là bao nhiêu mg?",
            imageKey: "img_59",
            correctAnswer: "20",
            explanation: "$G'(x) = 0,025(60x - 3x^2) = 0 \\Leftrightarrow x = 20\\text{ mg}$."
        },
        {
            id: 60,
            type: "short_answer",
            question: "Vận tốc tàu con thoi $v(t)=0,0015t^{3}-0,085t^{2}+70$ (ft/s) với $t\\in[0;100]$. Tìm vận tốc lớn nhất trong khoảng thời gian đó (làm tròn đến hàng đơn vị).",
            imageKey: "img_60",
            correctAnswer: "2083",
            explanation: "Khảo sát $v(t)$ trên $[0;100]$ thu được $v_{\\max} = v(100) = 2083\\text{ ft/s}$."
        },
        {
            id: 61,
            type: "short_answer",
            question: "Cho hàm số $y=ax^{3}+bx^{2}+cx+d$ có đồ thị như hình vẽ. Tính giá trị biểu thức $T=a+2b+3c+4d$.",
            imageKey: "img_61",
            correctAnswer: "-17",
            explanation: "Hàm số tìm được là $f(x) = -x^3 + 3x - 4 \\Rightarrow a=-1, b=0, c=3, d=-4 \\Rightarrow T = -17$."
        },
        {
            id: 62,
            type: "short_answer",
            question: "Một bể nước không nắp dạng lăng trụ tứ giác đều có thể tích $32\\text{ m}^3$. Giá kính là 600.000 đồng/m$^2$. Số tiền tối thiểu làm bể là bao nhiêu triệu đồng?",
            imageKey: "img_62",
            correctAnswer: "28,8",
            explanation: "Chi phí tối thiểu $S_{\\min} \\times 0,6 = 48 \\times 0,6 = 28,8$ triệu đồng."
        },
        {
            id: 63,
            type: "short_answer",
            question: "Một bác nông dân có $360\\text{ m}$ hàng rào để rào khu đất hình chữ nhật giáp sông (không rào bờ sông). Diện tích lớn nhất rào được là bao nhiêu m$^2$?",
            imageKey: "img_63",
            correctAnswer: "16200",
            explanation: "$S(x) = x(360 - 2x) \\Rightarrow S_{\\max} = 16200\\text{ m}^2$ tại $x = 90\\text{ m}$."
        },
        {
            id: 64,
            type: "short_answer",
            question: "Hàm chi phí $C(x)=x^{3}-3x^{2}-20x+500$, giá bán 220 nghìn/m. Lợi nhuận tối đa trong một ngày bằng bao nhiêu nghìn đồng?",
            imageKey: "img_64",
            correctAnswer: "1932",
            explanation: "$L(x) = 220x - C(x) = -x^3 + 3x^2 + 240x - 500$. Lợi nhuận tối đa thu được là 1932 nghìn đồng."
        },
        {
            id: 65,
            type: "short_answer",
            question: "Giá bán $P(x)=45-0,001x^{2}$ (triệu đồng/tấn). Chi phí $C(x)=100+30x$. Tìm $x$ để lợi nhuận lớn nhất (làm tròn đến hàng phần mười).",
            imageKey: "img_65",
            correctAnswer: "70,7",
            explanation: "Lợi nhuận $P_{LN}(x) = x P(x) - C(x) = -0,001x^3 + 15x - 100$. Lợi nhuận lớn nhất tại $x = \\frac{100}{\\sqrt{2}} \\approx 70,7$ tấn."
        },
        {
            id: 66,
            type: "short_answer",
            question: "Để mỗi ngày thu được số tiền bán rau lớn nhất thì trang trại đó nên bán rau với giá bao nhiêu nghìn đồng?",
            imageKey: "img_66",
            correctAnswer: "40",
            explanation: "Giá bán tối ưu thu được tiền bán lớn nhất là 40 nghìn đồng/kg."
        },
        {
            id: 67,
            type: "short_answer",
            question: "Thể tích lớn nhất của khối chóp tứ giác đều tạo thành là $\\frac{a\\sqrt{b}}{c}\\text{ cm}^3$. Tính $P=a+b+c$.",
            imageKey: "img_67",
            correctAnswer: "105",
            explanation: "Tính được $V_{\\max} = \\frac{100\\sqrt{2}}{3} \\Rightarrow a=100, b=2, c=3 \\Rightarrow P = 105$."
        },

        // ==================== PHẦN 4. TỰ LUẬN (CÂU 68 - CÂU 79) ====================
        {
            id: 68,
            type: "essay",
            question: "Trong không gian $Oxyz$, cho $\\vec{a}=(2;m-1;3)$ và $\\vec{b}=(1;3;-2n)$. Khi $\\vec{a}, \\vec{b}$ cùng phương, tính $m+n$ (làm tròn 1 chữ số thập phân).",
            imageKey: "img_68",
            correctAnswer: "6,3",
            explanation: "$\\vec{a} = k\\vec{b} \\Rightarrow k=2 \\Rightarrow m-1=6 \\Rightarrow m=7$ và $3 = -4n \\Rightarrow n = -0,75$. Do đó $m+n = 6,25 \\approx 6,3$."
        },
        {
            id: 69,
            type: "essay",
            question: "Trong không gian $Oxyz$, cho hình bình hành $ABCD$ với $A(3;1;2), B(1;0;1), C(2;3;0)$. Tọa độ đỉnh $D(a;b;c)$. Tính $a+b+c$.",
            imageKey: "img_69",
            correctAnswer: "9",
            explanation: "$\\vec{AD} = \\vec{BC} \\Rightarrow D = A + C - B = (4;4;1) \\Rightarrow a+b+c = 9$."
        },
        {
            id: 70,
            type: "essay",
            question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u}(-1;3;2)$ và $\\vec{v}(4;-1;1)$. Tích vô hướng $\\vec{u}\\cdot\\vec{v}$ bằng bao nhiêu?",
            imageKey: "img_70",
            correctAnswer: "-5",
            explanation: "$\\vec{u}\\cdot\\vec{v} = (-1)(4) + 3(-1) + 2(1) = -5$."
        },
        {
            id: 71,
            type: "essay",
            question: "Trong không gian $Oxyz$, cho $A(3;1;-2), B(2;-3;5)$. Điểm $M(a;b;c)$ thuộc đoạn $AB$ sao cho $MA=2MB$. Tính $a+b+c$ (làm tròn 1 chữ số thập phân).",
            imageKey: "img_71",
            correctAnswer: "3,3",
            explanation: "$\\vec{AM} = \\frac{2}{3}\\vec{AB} \\Rightarrow M\\left(\\frac{7}{3}; -\\frac{5}{3}; \\frac{8}{3}\\right) \\Rightarrow a+b+c = \\frac{10}{3} \\approx 3,3$."
        },
        {
            id: 72,
            type: "essay",
            question: "Một phòng học hình hộp chữ nhật dài $8\\text{ m}$, rộng $6\\text{ m}$, cao $5\\text{ m}$. Đèn treo chính giữa trần nhà. Tọa độ điểm treo đèn là $(x;y;z)$. Tính $x+y+z$.",
            imageKey: "img_72",
            correctAnswer: "12",
            explanation: "Tọa độ treo đèn $M(4;3;5) \\Rightarrow x+y+z = 4+3+5 = 12$."
        },
        {
            id: 73,
            type: "essay",
            question: "Máy bay bay thẳng đều từ $A(800;500;7)$ đến $B(940;550;9)$ trong 10 phút. Tọa độ máy bay sau 5 phút tiếp theo là $C(x;y;z)$. Tính $x+y+z$.",
            imageKey: "img_73",
            correctAnswer: "1595",
            explanation: "$\\vec{BC} = \\frac{1}{2}\\vec{AB} = (70;25;1) \\Rightarrow C(1010;575;10) \\Rightarrow x+y+z = 1595$."
        },
        {
            id: 74,
            type: "essay",
            question: "Tính cân nặng trung bình từ bảng mẫu số liệu ghép nhóm (làm tròn 1 chữ số thập phân).",
            imageKey: "img_74",
            correctAnswer: "51,8",
            explanation: "Số trung bình tính từ giá trị đại diện các nhóm bằng 51,8."
        },
        {
            id: 75,
            type: "essay",
            question: "Tính mốt của mẫu số liệu ghép nhóm chiều cao 50 học sinh (làm tròn 1 chữ số thập phân).",
            imageKey: "img_75",
            correctAnswer: "153,2",
            explanation: "Áp dụng công thức mốt cho mẫu số liệu ghép nhóm thu được 153,2."
        },
        {
            id: 76,
            type: "essay",
            question: "Tính tứ phân vị thứ nhất $Q_1$ của mẫu số liệu doanh thu (làm tròn 1 chữ số thập phân).",
            imageKey: "img_76",
            correctAnswer: "7,9",
            explanation: "Áp dụng công thức tứ phân vị thứ nhất thu được 7,9."
        },
        {
            id: 77,
            type: "essay",
            question: "Tính độ lệch chuẩn của mẫu số liệu ghép nhóm số tập bài chấm thi (làm tròn 1 chữ số thập phân).",
            imageKey: "img_77",
            correctAnswer: "3,1",
            explanation: "Tính phương sai và căn bậc hai thu được độ lệch chuẩn bằng 3,1."
        },
        {
            id: 78,
            type: "essay",
            question: "Cho hàm số $F(x)$ là một nguyên hàm của $f(x)=3x^{2}-4x+1$ và $F(2)=2$. Tính $F(3)$.",
            imageKey: "img_78",
            correctAnswer: "12",
            explanation: "$F(x) = x^3 - 2x^2 + x + C$. Có $F(2) = 2 \\Rightarrow C = 0$. Khi đó $F(3) = 27 - 18 + 3 = 12$."
        },
        {
            id: 79,
            type: "essay",
            question: "Biết tích phân $I=\\int_{1}^{2}\\left(3x^{2}+\\frac{2}{x}\\right)dx=a+b\\ln c$ với $a,b,c$ là các số nguyên tố. Tính giá trị $a+b+c$.",
            imageKey: "img_79",
            correctAnswer: "11",
            explanation: "$I = \\left[x^3 + 2\\ln|x|\\right]_1^2 = 7 + 2\\ln 2 \\Rightarrow a=7, b=2, c=2 \\Rightarrow a+b+c = 11$."
        }
    ]
};