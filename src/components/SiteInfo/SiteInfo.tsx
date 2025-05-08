import './SiteInfo.css';

const SiteInfo = () => {
    return (
        <footer className="site-info-footer">
            <div>
                <a href="/privacy">개인정보처리방침</a>
                <span> | </span>
                <a href="/terms">이용약관</a>
            </div>
            <div style={{ fontSize: '11px', marginTop: '4px' }}>© 2025 Mumuck. All rights reserved.
            </div>
        </footer>

    );
};

export default SiteInfo;
