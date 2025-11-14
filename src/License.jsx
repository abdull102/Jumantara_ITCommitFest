import React from "react";

export default function LicensePage() {
  const linkStyle =
    "text-blue-600 font-medium hover:text-blue-800 hover:underline";

  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Lisensi & Atribusi
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Lisensi Kode Sumber (Website)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Seluruh kode sumber (source code) untuk website ini dilisensikan di
            bawah{" "}
            <a
              href="https://opensource.org/licenses/MIT"
              className={linkStyle}
              {...externalLinkProps}
            >
              Lisensi MIT
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Ini berarti Anda bebas untuk menggunakan, menyalin, memodifikasi,
            dan mendistribusikan kode ini untuk tujuan apa pun, komersial maupun
            non-komersial, selama pemberitahuan hak cipta dan lisensi ini
            disertakan dalam semua salinan perangkat lunak.
          </p>
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Atribusi Aset & Ikon
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Beberapa ikon yang digunakan di website ini berasal dari{" "}
            <strong>Solar Icon Set</strong>, yang dibuat oleh{" "}
            <a
              href="https://github.com/480-Design/Solar-Icon-Set"
              className={linkStyle}
              {...externalLinkProps}
            >
              480 Design
            </a>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Ikon-ikon tersebut dilisensikan di bawah{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className={linkStyle}
              {...externalLinkProps}
            >
              Creative Commons Attribution 4.0 (CC BY 4.0)
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
