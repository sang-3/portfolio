export default function ContactSection() {
  return (
    <section id="contact" className="section-anchor border-t border-gray-200 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            함께 이야기하고 싶은 주제가 있다면 편하게 연락 주세요.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="mt-2 text-sm text-gray-800">skykwj0422@naver.com</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <p className="mt-2 text-sm text-gray-800">010-8594-3198</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-500">GitHub</p>
              <p className="mt-2 text-sm text-gray-800">github.com/sang-3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
