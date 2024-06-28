/**
 * This file is part of the DVSwitch Mode Switcher project.
 *
 * (c) 2024 Caleb <ko4uyj@gmail.com>
 *
 * For the full copyright and license information, see the
 * LICENSE file that was distributed with this source code.
 */

class Talkgroup {
    constructor(alias, tgid) {
        this.alias = alias;
        this.tgid = tgid;
    }

    static fromYAML(yamlData) {
        return yamlData.aliases.map(alias => new Talkgroup(alias.alias, alias.tgid));
    }
}

module.exports = Talkgroup;