import './styles/ContentColumn.scss'

const ContentColumn = ({ children }) => {
    return(
        <div className="contentColumn">
            {children}
        </div>

    );
};

export default ContentColumn