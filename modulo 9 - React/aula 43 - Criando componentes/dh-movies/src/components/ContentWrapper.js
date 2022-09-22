import ContentRowTop from "./ContentRowTop";
import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

// variaveis no js seguimos o padrão camelCase, que seria a primeira letra minúscula e qualquer espaço que tenha, separamos pela próxima letra maiúscula.

export function ContentWrapper(){
  return(
    <div id="content-wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">

				{/* <!-- Topbar --> */}
				<TopBar />
				{/* <!-- End of Topbar --> */}
        <ContentRowTop />
				{/* <!-- Content Row Top --> */}
				{/* <!--End Content Row Top--> */}
			</div>
			{/* <!-- End of MainContent --> */}

			{/* <!-- Footer --> */}
			<Footer />
			{/* <!-- End of Footer --> */}

      {/* <!-- End of Content Wrapper --> */}
		</div>
  )
}