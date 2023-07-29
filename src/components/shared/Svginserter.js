import React, { Component } from 'react';

//Svgs and Images
import Email from '../../../assets/svg/email';
import OpenLock from '../../../assets/svg/openlock';
import CloseLock from '../../../assets/svg/closelock';
import AccountLogo from '../../../assets/svg/accountLogo';
import MailLogo from '../../../assets/svg/mailLogo';
import ArrowRight from '../../../assets/svg/arrowRight';
import Back from '../../../assets/svg/back';

class Svginserter extends Component {
      components = {
            Email: Email,
            Password: OpenLock,
            ConfirmPass: CloseLock,
            Mail: MailLogo,
            Account: AccountLogo,
            ArrowRight: ArrowRight,
            Back: Back,
      };
      render(...props) {
            const TagName = this.components[this.props.tag];
            const st = this.props.style;
            return <TagName style={st} width={this.props.width} height={this.props.height} />;
      }
}

export default Svginserter;
