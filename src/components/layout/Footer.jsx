function Footer() {
  return (
    <footer className="w-full border-t border-[#ff7900]/20 bg-[#050505]  py-3 md:px-12">
      <div className="conatiner">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center  justify-between gap-2 text-sm md:flex-row">
          <div>
            <p className="text-[#9d9692] p-0">
              © 2026 Convert
              <span className="font-semibold text-[#ff7900]">Case</span>.
              All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-[#9d9692] p-0">
              Made by <span className="font-semibold text-[#ff7900]">Rocky</span>
            </p>
          </div>



        </div>

      </div>

    </footer>
  );
}

export default Footer;