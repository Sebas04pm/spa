
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route
							index
							element={
								<>
									<Inicio />
									<Nosotros />
									<PlanesVistaPrevia />
									<Experiencias />
									<Formulario />
									<Footer />
								</>
							}
						/>
						<Route
							path="Planes"
							element={
								<>
									<Planes />
									<Footer />
								</>
							}
						/>
						<Route
							path="*"
							element={
								<>
									<NotFound />
								</>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
