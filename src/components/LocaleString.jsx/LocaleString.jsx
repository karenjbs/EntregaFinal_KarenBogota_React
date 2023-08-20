export const LocaleString = ({ num }) => {
    return (
      <span>
        $
        {num.toLocaleString("es-CO", {
          maximumFractionDigits: 3,
          minimumFractionDigits: 3,
        })}
      </span>
    );
  };

  export default LocaleString;