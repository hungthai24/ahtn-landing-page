import { useState, useEffect } from 'react';

// Make sure to include the global styles for material symbols:
// @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700;800&family=Manrope:wght@400;500;600&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
// .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; vertical-align: middle; }
// .text-shadow-sm { text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
// .asymmetric-shape { clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%); }

export default function AnHaLandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    ['home', 'products', 'trustsignals', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const mailtoLink = "mailto:tnhung@ahtn.vn";

  return (
    <div className="bg-white text-stone-900 font-body selection:bg-orange-100 selection:text-orange-900">
      {/* Header: TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <a className="flex items-center gap-2 md:gap-3" href="#">
            <img
              alt="An Hạ Tây Ninh Logo"
              className="h-9 md:h-[3.6rem] w-auto object-contain"
              src="/logo.png"
            />
            <div className="text-sm md:text-lg font-bold tracking-tight text-orange-900 font-headline uppercase leading-[0.9]">
              AN HA<span className="text-[8px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] font-medium opacity-80 block mt-0.5 md:mt-1">TAY NINH</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center space-x-8 font-label">
            <a
              className={`${activeSection === 'home' ? 'text-orange-900 font-semibold border-b-2 border-orange-900' : 'text-stone-600 hover:text-orange-800'} pb-1 transition-all`}
              href="#home"
            >
              Trang chủ
            </a>
            <a
              className={`${activeSection === 'products' ? 'text-orange-900 font-semibold border-b-2 border-orange-900' : 'text-stone-600 hover:text-orange-800'} pb-1 transition-all`}
              href="#products"
            >
              Sản phẩm
            </a>
            <a
              className={`${activeSection === 'trustsignals' ? 'text-orange-900 font-semibold border-b-2 border-orange-900' : 'text-stone-600 hover:text-orange-800'} pb-1 transition-all`}
              href="#trustsignals"
            >
              Giá trị cốt lõi
            </a>
            <a
              className={`${activeSection === 'contact' ? 'text-orange-900 font-semibold border-b-2 border-orange-900' : 'text-stone-600 hover:text-orange-800'} pb-1 transition-all`}
              href="#contact"
            >
              Liên hệ
            </a>
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="https://zalo.me/0906664660"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0068ff] text-white w-9 h-9 md:w-[42px] md:h-[42px] rounded hover:opacity-90 transition-all active:scale-95 duration-150 flex items-center justify-center shadow-sm"
              title="Chat Zalo"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                alt="Zalo"
                className="w-5 h-5 md:w-7 md:h-7"
              />
            </a>
            <a
              href={mailtoLink}
              className="bg-primary text-on-primary px-3 md:px-6 rounded hover:opacity-90 transition-opacity active:scale-95 duration-150 font-semibold text-xs md:text-sm h-9 md:h-[42px] flex items-center"
            >
              Liên hệ <span className="hidden sm:inline ml-1">ngay</span>
            </a>
          </div>
        </div>
        <div className="bg-stone-200/50 h-[1px]"></div>
      </header>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[600px] md:min-h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-[0.4]"
              alt="Modern carton box manufacturing facility with organized stacks of cardboard boxes on pallets."
              src="/hero.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded border-l-4 border-secondary text-stone-100 text-xs md:text-sm font-bold tracking-widest uppercase">
                Công nghiệp phụ trợ hàng đầu
              </div>
              <h1 className="font-headline text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Giải pháp bao bì <span className="text-secondary-fixed">giấy toàn diện.</span>
              </h1>
              <p className="text-base md:text-xl text-stone-200 max-w-xl font-light leading-relaxed">
                Mang đến sự chính xác và tin cậy tuyệt đối trong từng lớp sóng carton. Chúng tôi đồng hành cùng sự thành công của doanh nghiệp qua những sản phẩm đóng gói chất lượng cao.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#products"
                  className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-secondary/90 transition-all active:scale-95 inline-block text-sm md:text-base"
                >
                  Xem sản phẩm
                </a>
                <a
                  href="#trustsignals"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-white/20 transition-all active:scale-95 inline-block text-sm md:text-base"
                >
                  Về chúng tôi
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Cards: Bento Grid Style */}
        <section id="products" className="py-24 px-6 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-orange-950 mb-4">Sản phẩm chủ lực</h2>
              <div className="h-1.5 w-24 bg-secondary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              {/* Card 1 */}
              <div className="lg:col-span-8 group relative bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img
                  className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Wide angle view of stacked brown carton boxes"
                  src="/carton.webp"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20">
                  <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded mb-4">BEST SELLER</span>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-2">Thùng Carton 3-5-7 lớp</h3>
                  <p className="text-stone-200 max-w-md text-sm md:text-base">Đáp ứng mọi tiêu chuẩn chịu lực và bảo quản cho hàng hóa xuất khẩu và nội địa.</p>
                </div>
              </div>

              {/* Card 2: Flexo */}
              <div className="lg:col-span-4 bg-stone-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col border border-stone-200">
                <div className="h-48 overflow-hidden">
                  <img
                    alt="Bao bì in Flexo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="/flexo.webp"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-headline font-bold mb-4 text-orange-950">Bao bì in Flexo</h3>
                    <p className="text-stone-600 text-sm">Giải pháp in ấn tốc độ cao, chi phí tối ưu cho các đơn hàng số lượng lớn với độ sắc nét ổn định.</p>
                  </div>
                  <a
                    className="mt-8 flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all"
                    href={mailtoLink}
                  >
                    Liên hệ <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Card 3: Offset */}
              <div className="lg:col-span-4 bg-white rounded-xl border-b-4 border-secondary shadow-sm hover:translate-y-[-8px] transition-transform duration-300 overflow-hidden flex flex-col border border-stone-100">
                <div className="h-48 overflow-hidden">
                  <img
                    alt="Bao bì in Offset"
                    className="w-full h-full object-cover"
                    src="/offset.webp"
                  />
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-headline font-bold mb-4 text-orange-950">Bao bì in Offset</h3>
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">Nâng tầm thương hiệu với chất lượng in ấn cao cấp, màu sắc trung thực trên nền giấy carton.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold rounded uppercase">Chất lượng cao</span>
                    <span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold rounded uppercase">Bền màu</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="lg:col-span-8 text-white rounded-xl flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <img
                  alt="Custom packaging design"
                  className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/custom.webp"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4">Gia công theo yêu cầu</h3>
                  <p className="text-stone-200 mb-8 text-sm md:text-base">Chúng tôi thiết kế và sản xuất các mẫu bao bì đặc thù, kích thước phi tiêu chuẩn theo đúng bản vẽ kỹ thuật của bạn.</p>
                  <a
                    href={mailtoLink}
                    className="bg-white text-orange-900 font-bold px-8 py-3 rounded hover:bg-stone-100 transition-colors shadow-lg active:scale-95 inline-block text-sm"
                  >
                    Yêu cầu báo giá
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section id="trustsignals" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-6">
                <div className="mx-auto w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
                </div>
                <h4 className="font-headline text-xl font-bold text-orange-950 uppercase tracking-wide">Giá cả hợp lý</h4>
                <p className="text-stone-600 leading-relaxed text-sm">Đội ngũ chăm sóc khách hàng tận tâm và kinh nghiệm, hỗ trợ khách hàng tìm kiếm giải pháp tối ưu nhất về chi phí và hiệu quả.</p>
              </div>
              <div className="space-y-6">
                <div className="mx-auto w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-primary">local_shipping</span>
                </div>
                <h4 className="font-headline text-xl font-bold text-orange-950 uppercase tracking-wide">Đáp ứng tiến độ</h4>
                <p className="text-stone-600 leading-relaxed text-sm">Công nghệ máy móc hiện đại, đội ngũ thợ kỹ thuật, công nhân lành nghề, cam kết giao hàng đúng thời gian thỏa thuận trên toàn quốc.</p>
              </div>
              <div className="space-y-6">
                <div className="mx-auto w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-primary">verified</span>
                </div>
                <h4 className="font-headline text-xl font-bold text-orange-950 uppercase tracking-wide">Chất lượng đạt chuẩn</h4>
                <p className="text-stone-600 leading-relaxed text-sm">Quy trình sản xuất khép kín đạt chứng nhận ISO 9001 và FSC, đảm bảo chất lượng đồng nhất trên mọi lô hàng.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-primary rounded-2xl overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            <div className="relative z-10 px-8 py-16 md:p-20 text-center">
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-8">Bạn đang tìm giải pháp bao bì hoàn hảo?</h2>
              <p className="text-stone-100 text-lg mb-12 max-w-2xl mx-auto opacity-90">Liên hệ với đội ngũ kỹ thuật của An Hạ Tây Ninh để nhận được tư vấn chi tiết và báo giá cạnh tranh nhất.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={mailtoLink}
                  className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-stone-100 transition-colors inline-block"
                >
                  Liên hệ tư vấn ngay
                </a>
                <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">Tải Catalogue</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-stone-50 font-label border-t border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-stone-600">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="An Hạ Tây Ninh Logo"
                className="h-12 md:h-[3.6rem] w-auto object-contain"
                src="/logo.png"
              />
              <div className="text-lg font-bold text-orange-950 uppercase leading-none">
                AN HA<span className="text-[10px] tracking-[0.2em] font-medium opacity-80 block mt-1">TAY NINH</span>
              </div>
            </div>
            <p className="max-w-xs">Chuyên sản xuất và gia công các loại thùng carton, bao bì giấy chất lượng cao cho các ngành công nghiệp.</p>
          </div>
          <div className="space-y-4">
            <div className="font-bold text-orange-900 uppercase tracking-wider">Thông tin liên hệ</div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-stone-600">
                <span className="material-symbols-outlined text-sm">location_on</span> Địa chỉ: KCN An Hạ, Xã Tân Vĩnh Lộc, TP.HCM
              </li>
              <li className="flex items-center gap-2 text-stone-600">
                <span className="material-symbols-outlined text-sm">call</span> Hotline: +84 906 664 660
              </li>
              <li className="flex items-center gap-2 text-stone-600">
                <span className="material-symbols-outlined text-sm">mail</span> Email: tnhung@ahtn.vn
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="font-bold text-orange-900 uppercase tracking-wider">Chứng chỉ &amp; Cam kết</div>
            <ul className="space-y-3">
              <li className="text-stone-600">Certifications: ISO 9001, FSC</li>
              <li 
                className="text-stone-600 hover:text-primary cursor-pointer transition-colors"
                onClick={() => setModalContent({
                  title: "Chính sách bảo mật thông tin",
                  content: `CHÍNH SÁCH BẢO MẬT THÔNG TIN KHÁCH HÀNG\nXƯỞNG BAO BÌ CARTON AN HẠ TÂY NINH\n\n1. Mục đích và Phạm vi\nBản cam kết này thiết lập sự tin tưởng giữa An Hạ Tây Ninh và Quý khách hàng. Chúng tôi hiểu rằng trong ngành bao bì, các thông tin về mẫu mã, kích thước đặc thù và kế hoạch kinh doanh của khách hàng là tài sản vô giá.\n\n2. Cam kết về Dữ liệu thực tế tại Xưởng\nMặc dù website của chúng tôi là trang thông tin (Landing Page), nhưng đối với tất cả dữ liệu khách hàng được cung cấp trực tiếp cho xưởng, chúng tôi cam kết:\n\n- Bảo mật mẫu mã: Toàn bộ file thiết kế, thông số kỹ thuật thùng carton, cấu tạo sóng và market in ấn của khách hàng sẽ được lưu trữ nội bộ, tuyệt đối không chia sẻ cho bên thứ ba hoặc dùng làm mẫu chào hàng cho khách hàng khác nếu chưa được sự đồng ý.\n\n- Bảo mật thông tin đơn hàng: Số lượng đơn hàng, tần suất đặt hàng và thông tin giao nhận của Quý khách được bảo mật để tránh ảnh hưởng đến hoạt động cạnh tranh trên thị trường của Quý khách.\n\n- Quản lý nhân sự: Đội ngũ nhân viên tại xưởng (từ khối văn phòng đến vận hành máy) đều được quán triệt về trách nhiệm bảo mật thông tin và tài sản trí tuệ của khách hàng.\n\n3. Thu thập thông tin qua Website\nTrên Landing Page, chúng tôi chỉ thu thập các thông tin cơ bản khi Quý khách chủ động liên hệ:\n\n- Họ tên, số điện thoại, email.\n\n- Nội dung yêu cầu tư vấn/báo giá.\n\n- Mục đích: Chỉ dùng để nhân viên của xưởng gọi lại tư vấn kỹ thuật và gửi báo giá trực tiếp. Chúng tôi không sử dụng dữ liệu này cho mục đích quảng cáo rác (spam) hoặc bán dữ liệu cho bên khác.\n\n4. Quy trình Lưu trữ và Tiêu hủy\n- Lưu trữ: Dữ liệu thiết kế và hợp đồng được lưu trữ trên hệ thống máy tính nội bộ có phân quyền truy cập.\n\n- Tiêu hủy: Đối với các bản in thử, bản kẽm hoặc khuôn bế cũ không còn sử dụng, chúng tôi có quy trình tiêu hủy hoặc lưu kho riêng biệt để thông tin thương hiệu của khách hàng không bị rò rỉ ra ngoài dưới dạng phế liệu.\n\n5. Cam kết từ Nhà lãnh đạo\nVới tư cách là đơn vị sản xuất trực tiếp, An Hạ Tây Ninh kết tuân thủ nghiêm túc các thỏa thuận bảo mật (NDA) riêng biệt nếu khách hàng có yêu cầu ký kết văn bản pháp lý cho những dự án lớn hoặc sản phẩm độc quyền.`
                })}
              >
                Cam kết bảo mật thông tin
              </li>
              <li 
                className="text-stone-600 hover:text-primary cursor-pointer transition-colors"
                onClick={() => setModalContent({
                  title: "Chính sách chất lượng",
                  content: `CHÍNH SÁCH CHẤT LƯỢNG TẠI AN HẠ TÂY NINH\n"Vững cấu trúc - Chuẩn sắc diện"\n\nTại An Hạ Tây Ninh, chúng tôi hiểu rằng bao bì không chỉ là vật bảo vệ sản phẩm, mà còn là bộ mặt của thương hiệu. Vì vậy, chúng tôi thiết lập hệ thống quản lý chất lượng nghiêm ngặt dựa trên 4 trụ cột cốt lõi:\n\n1. Chất lượng Nguyên liệu đầu vào\n- Chỉ sử dụng nguồn giấy kiểm định rõ ràng, đảm bảo đúng định lượng (GSM) và tiêu chuẩn độ bục, độ nén theo yêu cầu của khách hàng.\n\n- Đa dạng các loại sóng (A, B, C, E, BC...) được tuyển chọn phù hợp với từng đặc thù ngành hàng (nông sản, điện tử, gia dụng...).\n\n2. Sự chính xác trong Sản xuất\n- Hệ thống máy móc tự động: Giảm thiểu tối đa sai số do con người, đảm bảo các đường bế sắc nét, độ chính xác cao về kích thước.\n\n- Kỹ thuật in ấn: Đảm bảo độ sắc nét của logo, đúng màu sắc nhận diện thương hiệu của khách hàng trên từng lô hàng.\n\n3. Quy trình Kiểm soát nghiêm ngặt (QC)\n- Kiểm tra 100%: Mọi lô hàng trước khi xuất xưởng đều trải qua quy trình kiểm tra xác suất và kiểm tra thành phẩm cuối cùng.\n\n- Loại bỏ lỗi: Kiên quyết không xuất xưởng những sản phẩm bị lỗi dán, lệch màu hoặc sai quy cách thông số.\n\n4. Cam kết Tiến độ & Dịch vụ\n- Đúng hạn: Tối ưu hóa quy trình vận hành để đảm bảo thời gian giao hàng đúng như cam kết trong hợp đồng.\n\n- Lắng nghe & Cải tiến: Luôn tiếp nhận phản hồi từ khách hàng để điều chỉnh kỹ thuật sản xuất, giúp tối ưu hóa chi phí mà vẫn giữ vững chất lượng bao bì.\n\n"Chất lượng của An Ha Tay Ninh được đo lường bằng sự an toàn của hàng hóa bên trong và sự hài lòng của khách hàng bên ngoài."`
                })}
              >
                Chính sách chất lượng
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto bg-stone-200 h-[1px] my-8"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-stone-500 text-xs">
          <p>© 2026 An Hà Tây Ninh. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-orange-700 underline transition-all cursor-pointer" href="#">Facebook</a>
            <a className="hover:text-orange-700 underline transition-all cursor-pointer" href="#">Email</a>
            <a className="hover:text-orange-700 underline transition-all cursor-pointer" href="#">Zalo</a>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-stone-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-primary dark:text-orange-500 tracking-tight">{modalContent.title}</h3>
              <button
                onClick={() => setModalContent(null)}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                <span className="material-symbols-outlined text-stone-500">close</span>
              </button>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed font-medium whitespace-pre-wrap text-sm">
                {modalContent.content}
              </p>
            </div>
            <div className="p-6 border-t border-stone-100 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="bg-primary text-white px-8 py-2.5 rounded hover:opacity-90 transition-opacity font-bold text-sm"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
