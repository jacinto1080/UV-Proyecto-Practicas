const FiltrarServicios = ({ onSelectChange, selectedValue }) => {
  return (
    <>
      <label className="label-citas">
        <h1 className="h1LabelCitas">Servicio municipal de LGTBIfobia</h1>
      </label>

      <div className="inputForm0">
        <div>
          <select
            value={selectedValue}
            onChange={onSelectChange}
            className="inputForm1"
            id="categoria">
            <option value="">- Seleccione un servicio -</option>
            <option value="apoyo">Apoyo psicológico</option>
            <option value="orientación">Orientación jurídica</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default FiltrarServicios;
