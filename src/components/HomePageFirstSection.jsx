import { useTranslation } from "react-i18next";
import MyForm from "./MyForm";

function HomePageFirstSection() {
  const { t } = useTranslation(); // Destructuring t function from useTranslation hook

  return (
    <div className="mb-5">
      <div style={{ padding: "20px", position: "relative" }}>
        <div style={{ backgroundImage: 'url("images/unsplash.svg")', backgroundSize: "cover", backgroundPosition: "center", width: "100%", padding: "10px", height: "500px", borderRadius: "20px",}}>
          <p style={{ textAlign: "center", fontSize: "50px", color: "white", paddingTop: "2rem",}}
          >
            {t("homepage.madeFor")} {/* Translate using t function */}
          </p>
        </div>
        <MyForm />
      </div>
    </div>
  );
}

export default HomePageFirstSection;
